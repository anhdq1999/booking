const _constants = require("../_constants/index");
const REGISTER = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.REGISTER_CONSTANTS.action,
      message: _constants.auth.REGISTER_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: true,
      action: _constants.auth.REGISTER_CONSTANTS.action,
      message: `${_constants.auth.REGISTER_CONSTANTS.message.failure}`,
      data: null
    };
  }
};
const LOGIN = {
  SUCCESS: (data, accessToken) => {
    return {
      success: true,
      action: _constants.auth.LOGIN_CONSTANTS.action,
      message: _constants.auth.LOGIN_CONSTANTS.message.success,
      data: data,
      accessToken: accessToken
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.LOGIN_CONSTANTS.action,
      message: error,
      data: null
    };
  }
};
const EDIT_USER = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.EDIT_USER_CONSTANTS.action,
      message: _constants.auth.EDIT_USER_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.EDIT_USER_CONSTANTS.action,
      message: `${_constants.auth.EDIT_USER_CONSTANTS.message.failure}`,
      data: null
    };
  }
};
const JWT = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.JWT_CONSTANTS.action,
      message: _constants.auth.JWT_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.JWT_CONSTANTS.action,
      message: `${_constants.auth.JWT_CONSTANTS.message.failure}, ${error}`,
      data: null
    };
  }
};
const VERIFY = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.VERIFY_CONSTANTS.action,
      message: _constants.auth.VERIFY_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.VERIFY_CONSTANTS.action,
      message: `${_constants.auth.VERIFY_CONSTANTS.message.failure}, ${error}`,
      data: null
    };
  }
};
const FORGET_PASSWORD = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.FORGET_PASSWORD.action,
      message: _constants.auth.FORGET_PASSWORD.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.FORGET_PASSWORD.action,
      message: `${_constants.auth.FORGET_PASSWORD.message.failure}, ${error}`,
      data: null
    };
  }
};
const RESET_PASSWORD = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.RESET_PASSWORD.action,
      message: _constants.auth.RESET_PASSWORD.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.RESET_PASSWORD.action,
      message: `${_constants.auth.RESET_PASSWORD.message.failure}, ${error}`,
      data: null
    };
  }
};
const CHANGE_PASSWORD = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: _constants.auth.CHANGE_PASSWORD.action,
      message: _constants.auth.CHANGE_PASSWORD.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: _constants.auth.CHANGE_PASSWORD.action,
      message: `${_constants.auth.CHANGE_PASSWORD.message.failure}, ${error}`,
      data: null
    };
  }
};

const UserResponse = { REGISTER, LOGIN, EDIT_USER, JWT, VERIFY, FORGET_PASSWORD, RESET_PASSWORD, CHANGE_PASSWORD };
module.exports = UserResponse;