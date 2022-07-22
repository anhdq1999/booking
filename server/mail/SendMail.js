const nodeMailer = require("nodemailer");

class SendMailController {
  send = async (emailTo, subject, text) => {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });
    const mailOption = {
      from: "18130006@st.hcmuaf.edu.vn",
      to: emailTo,
      subject: subject,
      html: text
    };
    await transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log("Message sent" + info.response);
        return info.response;
      }
    });
  };
}

module.exports = new SendMailController();
