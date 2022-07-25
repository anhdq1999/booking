const authConstants = {
  REGISTER_CONSTANTS: {
    action: "REGISTER_USER",
    message: {
      success: "Register User successfully",
      failure: "Register User failure"
    }
  },
  LOGIN_CONSTANTS: {
    action: "LOGIN_USER",
    message: {
      success: "LOGIN User successfully",
      failure: "LOGIN User failure"
    }
  },
  EDIT_USER_CONSTANTS: {
    action: "EDIT_USER_USER",
    message: {
      success: "EDIT_USER User successfully",
      failure: "EDIT_USER User failure"
    }
  },
  JWT_CONSTANTS: {
    action: "JWT_USER",
    message: {
      success: "JWT User successfully",
      failure: "JWT User failure"
    }
  },
  VERIFY_CONSTANTS: {
    action: "VERIFY",
    message: {
      success: "verify User successfully",
      failure: "verify User failure"
    }
  },
  FORGET_PASSWORD: {
    action: "FORGET_PASSWORD",
    message: {
      success: "Please check your email to reset your password",
      failure: "FORGET_PASSWORD failure"
    }
  },
  RESET_PASSWORD: {
    action: "RESET_PASSWORD",
    message: {
      success: "Password has been reset",
      failure: "RESET_PASSWORD failure"
    }
  },
  CHANGE_PASSWORD: {
    action: "CHANGE_PASSWORD",
    message: {
      success: "Change password successfully",
      failure: "Change password failure"
    }
  }

};
module.exports = authConstants;