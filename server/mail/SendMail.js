const nodeMailer = require("nodemailer");

class SendMailController {
  send = async (email, subject, text, html) => {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });
    const mailOption = {
      // from: "18130006@st.hcmuaf.edu.vn",
      // to: email,
      // subject: subject,
      // html : html
      from: "18130006@st.hcmuaf.edu.vn",
      to: "anhdq.1999@gmail.com",
      subject: "Sending Email using Node.js",
      html: "<h1>Welcome</h1><p>That was easy!</p>"
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
