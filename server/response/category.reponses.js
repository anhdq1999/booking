const constants = require('../_constants');

const GETALL = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.GETALL_CONSTANTS.action,
            message: constants.categories.GETALL_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.GETALL_CONSTANTS.action,
            message: constants.categories.GETALL_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const GETALL_DELETED = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.GETALL_DELETED_CONSTANTS.action,
            message: constants.categories.GETALL_DELETED_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.GETALL_DELETED_CONSTANTS.action,
            message: constants.categories.GETALL_DELETED_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const GETONEBYID = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.GETONE_CONSTANTS.action,
            message: constants.categories.GETONE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.GETONE_CONSTANTS.action,
            message: constants.categories.GETONE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const CREATE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.CREATE_CONSTANTS.action,
            message: constants.categories.CREATE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.CREATE_CONSTANTS.action,
            message: constants.categories.CREATE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const UPDATE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.UPDATE_CONSTANTS.action,
            message: constants.categories.UPDATE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.UPDATE_CONSTANTS.action,
            message: constants.categories.UPDATE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const DELETE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.DELETE_CONSTANTS.action,
            message: constants.categories.DELETE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.DELETE_CONSTANTS.action,
            message: constants.categories.DELETE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const REMOVE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.REMOVE_CONSTANTS.action,
            message: constants.categories.REMOVE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.REMOVE_CONSTANTS.action,
            message: constants.categories.REMOVE_CONSTANTS.message.failure,
            data: null,
        };
    },
};
const RESTORE = {
    SUCCESS: (data) => {
        return {
            success: true,
            action: constants.categories.RESTORE_CONSTANTS.action,
            message: constants.categories.RESTORE_CONSTANTS.message.success,
            data: data,
        };
    },
    FAILURE: () => {
        return {
            success: false,
            action: constants.categories.RESTORE_CONSTANTS.action,
            message: constants.categories.RESTORE_CONSTANTS.message.failure,
            data: null,
        };
    },
};

const RoomReponse = {
    GETALL,
    GETALL_DELETED,
    GETONEBYID,
    CREATE,
    UPDATE,
    DELETE,
    REMOVE,
    RESTORE,
};
module.exports = RoomReponse;
