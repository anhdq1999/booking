const constants = require("../_constants/order.constants");

const GET_ALL = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.GET_ALL_CONSTANTS.action,
      message: constants.GET_ALL_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.GET_ALL_CONSTANTS.action,
      message: constants.GET_ALL_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const GET_ALL_DELETED = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.GET_ALL_DELETED_CONSTANTS.action,
      message: constants.GET_ALL_DELETED_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.GET_ALL_DELETED_CONSTANTS.action,
      message: constants.GET_ALL_DELETED_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const GET_BY_ID = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.GET_BY_ID.action,
      message: constants.GET_BY_ID.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.GET_BY_ID.action,
      message: constants.GET_BY_ID.message.failure,
      error: error,
      data: null
    };
  }
};
const CREATE = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.CREATE_CONSTANTS.action,
      message: constants.CREATE_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.CREATE_CONSTANTS.action,
      message: constants.CREATE_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const UPDATE = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.UPDATE_CONSTANTS.action,
      message: constants.UPDATE_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.UPDATE_CONSTANTS.action,
      message: constants.UPDATE_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const DELETE = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.DELETE_CONSTANTS.action,
      message: constants.DELETE_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.DELETE_CONSTANTS.action,
      message: constants.DELETE_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const REMOVE = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.REMOVE_CONSTANTS.action,
      message: constants.REMOVE_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.REMOVE_CONSTANTS.action,
      message: constants.REMOVE_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};
const RESTORE = {
  SUCCESS: (data) => {
    return {
      success: true,
      action: constants.RESTORE_CONSTANTS.action,
      message: constants.RESTORE_CONSTANTS.message.success,
      data: data
    };
  },
  FAILURE: (error) => {
    return {
      success: false,
      action: constants.RESTORE_CONSTANTS.action,
      message: constants.RESTORE_CONSTANTS.message.failure,
      error: error,
      data: null
    };
  }
};


const RoomResponse = {
  CREATE,
  GET_ALL,
  GET_BY_ID,
  GET_ALL_DELETED,
  UPDATE,
  DELETE,
  REMOVE,
  RESTORE
};
module.exports = RoomResponse;
