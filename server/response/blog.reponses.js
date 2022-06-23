const constants = require('../_constants');

const GETALL = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.GETALL_CONSTANTS.action,
            message: constants.blog.GETALL_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.GETALL_CONSTANTS.action,
            message: constants.blog.GETALL_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const GETALL_DELETED = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.GETALL_DELETED_CONSTANTS.action,
            message: constants.blog.GETALL_DELETED_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.GETALL_DELETED_CONSTANTS.action,
            message: constants.blog.GETALL_DELETED_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const CREATE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.CREATE_CONSTANTS.action,
            message: constants.blog.CREATE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.CREATE_CONSTANTS.action,
            message: constants.blog.CREATE_CONSTANTS.message.failure,
            data: null,
        };
    },
    FAILURE_EXIST: () => {
        return {
            success: false,
            action: constants.blog.CREATE_CONSTANTS.action,
            message: constants.blog.CREATE_CONSTANTS.message.failure_exist,
            data: null,
        };
    },
};
const UPDATE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.UPDATE_CONSTANTS.action,
            message: constants.blog.UPDATE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.UPDATE_CONSTANTS.action,
            message: constants.blog.UPDATE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const DELETE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.DELETE_CONSTANTS.action,
            message: constants.blog.DELETE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.DELETE_CONSTANTS.action,
            message: constants.blog.DELETE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const GETBYID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.GET_BY_ID_CONSTANTS.action,
            message: constants.blog.GET_BY_ID_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.GET_BY_ID_CONSTANTS.action,
            message: constants.blog.GET_BY_ID_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const RESTORE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.blog.RESTORE_CONSTANTS.action,
            message: constants.blog.RESTORE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.blog.RESTORE_CONSTANTS.action,
            message: constants.blog.RESTORE_CONSTANTS.message.failure,
            data: null,
        };
    },
};

const blogReponses = {
    GETALL,
    GETALL_DELETED,
    CREATE,
    UPDATE,
    DELETE,
    GETBYID,
    RESTORE,
};
module.exports = blogReponses;
