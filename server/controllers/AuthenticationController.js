const User = require("../models/Users");
const bcrypt = require("bcrypt");
const Mail = require("../mail/SendMail");
const response = require("../response");
const jwt = require("jsonwebtoken");

class AuthenticationController {

  register = async (req, res) => {
    const userEmail = await User.findOne({ email: req.body.email });
    const userName = await User.findOne({ username: req.body.username });
    if (userEmail && userName) {
      return res.status(400).json(response.auth.REGISTER.FAILURE("Email or Username is exited"));
    } else {
      const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET_KEY_VERIFY, { expiresIn: "1d" });
      const subject = `Booking | This is email verify account`;
      const text = `
         <form action="http://localhost:8080/auth/register-verify?e=${req.body.email}&v=${token}" method="post">
          <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">TRIPPER | Booking rooms</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Booking Tripper. Use the following link to complete your verify account. Link is valid for 1 day</p>
          <button style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"> Verify now</button>
          <p style="font-size:0.9em;">Anh Quang,<br />TRIPPER | Booking room</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Đồ án công nghệ phần mềm</p>
            <p>Thanks you!!</p>
            <p>NLU university</p>
          </div>
          </div>
          </div> 
         </form>
`;

      await Mail.send(req.body.email, subject, text);

      req.body.hash_password = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({ ...req.body, verifyLink: token });
      try {
        const savedUser = await newUser.save();
        return res.status(200).json(response.auth.REGISTER.SUCCESS(savedUser));
      } catch (error) {
        return res.status(400).json(response.auth.REGISTER.FAILURE(error));
      }
    }
  };

  verify = async (req, res) => {
    const { e, v } = req.query;
    if (!e || !v) {
      return res.status(400).body(response.auth.VERIFY.FAILURE("Bad request"));
    } else {
      const user = await User.findOne({ email: e });
      if (!user) {
        return res.status(400).body(response.auth.VERIFY.FAILURE("Not found user by email : " + e));
      } else {
        if (v !== user.verifyLink) return res.status(400).json(response.auth.VERIFY.FAILURE("Incorrect link or it is expire"));
        jwt.verify(v, process.env.JWT_SECRET_KEY_VERIFY, (err, data) => {
          if (err) return res.status(400).json(response.auth.VERIFY.FAILURE("Incorrect link or it is expire"));
        });
        try {
          const updateUser = await User.findOneAndUpdate({ email: user.email }, {
            isVerify: true, verifyLink: null
          }, { new: true });
          return res.status(200).json(response.auth.VERIFY.SUCCESS(updateUser));
        } catch (e) {
          return res.status(400).json(response.auth.VERIFY.FAILURE(e));
        }
      }
    }
  };

  login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (user.isVerify === false) {
        return res.status(400).json(response.auth.LOGIN.FAILURE("Account is not verify, Please verify account!!"));
      } else {
        if (user.comparePassword(req.body.password)) {
          return res.status(200).json(response.auth.LOGIN.SUCCESS(user));
        } else {
          return res.status(400).json(response.auth.LOGIN.FAILURE("Wrong username or password"));
        }
      }
    } else {
      return res.status(400).json(response.auth.LOGIN.FAILURE("Not found users with username"));
    }
  };

  forgotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY_FORGOT_PASS, { expiresIn: "5m" });
      const updateUsers = await User.findOneAndUpdate({ _id: user._id }, { resetLink: token }, { new: true });
      const subject = `Booking | This is email RESET password`;
      // http://localhost:8080/auth/forgot-active?id=1234567&q=123124
      const text = `
          <form action="http://localhost:8080/auth/forgot-active?i=${user._id}&f=${token}" method="post">
      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
       style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
  <tr>
    <td>
      <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
             align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td style="height:80px;">&nbsp;</td>
        </tr>
        <tr>
          <td style="height:20px;">&nbsp;</td>
        </tr>
        <tr>
          <td>
            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                   style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
              <tr>
                <td style="height:40px;">&nbsp;</td>
              </tr>
              <tr>
                <td style="padding:0 35px;">
                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                    You have
                    requested to reset your password</h1>
                  <span
                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                    We cannot simply send you your old password. A unique link to reset your
                    password has been generated for you. To reset your password, click the
                    following link and follow the instructions.
                  </p>
                  <button 
                     style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                    Password</button>
                </td>
              </tr>
              <tr>
                <td style="height:40px;">&nbsp;</td>
              </tr>
            </table>
          </td>
        <tr>
          <td style="height:20px;">&nbsp;</td>
        </tr>
        <tr>
          <td style="text-align:center;">
            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
              &copy; <strong>TRIPPER | Booking rooms</strong></p>
          </td>
        </tr>
        <tr>
          <td style="height:80px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</form>        
        `;
      await Mail.send(req.body.email, subject, text);
      res.status(200).json(response.auth.FORGET_PASSWORD.SUCCESS(updateUsers));
    } else {
      res.status(400).json(response.auth.FORGET_PASSWORD.FAILURE("Not found email " + req.body.email));
    }
  };

  resetPassword = async (req, res) => {
    const { i, f } = req.query;
    const { newPassword } = req.body;
    if (!i || !f) {
      return res.status(400).json(response.auth.RESET_PASSWORD.FAILURE("Bad request"));
    } else {
      const user = await User.findOne({ _id: i });
      if (!user) {
        return res.status(400).json(response.auth.RESET_PASSWORD.FAILURE("Incorrect link or it is expire"));
      } else {
        if (f !== user.resetLink) return res.status(400).json(response.auth.RESET_PASSWORD.FAILURE("Incorrect link or it is expire"));
        jwt.verify(f, process.env.JWT_SECRET_KEY_FORGOT_PASS, (err, decodeData) => {
          if (err) {
            return res.status(400).json(response.auth.RESET_PASSWORD.FAILURE("Incorrect link or it is expire"));
          }
        });
        const hash_password = bcrypt.hashSync(newPassword, 10);
        try {
          const userUpdate = await User.findOneAndUpdate({ _id: i }, {
            hash_password, resetLink: null
          }, { new: true });
          return res.status(200).json(response.auth.RESET_PASSWORD.SUCCESS(userUpdate));
        } catch (error) {
          return res.status(400).json(response.auth.RESET_PASSWORD.FAILURE(error));
        }
      }
    }
  };

  changePassword = async (req, res) => {
    const { username, password, newPassword } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json(response.auth.CHANGE_PASSWORD.FAILURE("Not found User by username : " + username));
    } else {
      if (!user.comparePassword(password)) {
        return res.status(400).json(response.auth.CHANGE_PASSWORD.FAILURE("Old password is invalid "));
      }
      try {
        const hashNewPassword = bcrypt.hashSync(newPassword, 10);
        const userUpdate = await User.findOneAndUpdate({ username }, { hash_password: hashNewPassword }, { new: true });
        return res.status(200).json(response.auth.CHANGE_PASSWORD.SUCCESS(userUpdate));
      } catch (e) {
        return res.status(400).json(response.auth.CHANGE_PASSWORD.FAILURE(e));
      }
    }
  };
}

module.exports = new AuthenticationController();
