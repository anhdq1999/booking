const { transporter } = require("../config/sendmail.config");
const crypto = require("crypto");

class SendMailController {

  send = async (emailTo, subject, text) => {
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

  sendMailTobeHost(req, res, next) {

    const OTP = crypto.randomBytes(4).toString("hex");

    const mailOption = {
      from: "18130006@st.hcmuaf.edu.vn",
      to: req.body.to,
      subject: "OTP to be host",
      html: "Here is your OTP " +
        "</br>" +
        OTP
    };

    transporter.sendMail(mailOption)
      .then(
        rs => {
          res.status(200).json(
            {
              message: "OTP was sent to your email: " + req.body.to
            }
          );
        }).catch(
      err => {
        res.status(500).json(
          {
            message: err.message
          }
        );
      }
    );


  }
}

module.exports = new SendMailController();
