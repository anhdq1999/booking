const constants = require("../_constants")

const GETALL = {  
    SUCCESS: (data) => {
        return {
            success:true,
            action:constants.room.GETALL_CONSTANTS.action,
            message: constants.room.GETALL_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action:constants.room.GETALL_CONSTANTS.action,
            message: constants.room.GETALL_CONSTANTS.message.failure,
            data: null
        }
    }
}
const GETALL_DELETED = {  
    SUCCESS: (data) => {
        return {
            success:true,
            action:constants.room.GETALL_DELETED_CONSTANTS.action,
            message: constants.room.GETALL_DELETED_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action:constants.room.GETALL_DELETED_CONSTANTS.action,
            message: constants.room.GETALL_DELETED_CONSTANTS.message.failure,
            data: null
        }
    }
}
const GETONEBYID = {  
    SUCCESS: (data) => {
        return {
            success:true,
            action:constants.room.GETONE_CONSTANTS.action,
            message: constants.room.GETONE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action:constants.room.GETONE_CONSTANTS.action,
            message: constants.room.GETONE_CONSTANTS.message.failure,
            data: null
        }
    }
}
const CREATE = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action: constants.room.CREATE_CONSTANTS.action,
            message: constants.room.CREATE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action: constants.room.CREATE_CONSTANTS.action,
            message: constants.room.CREATE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const UPDATE = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action: constants.room.UPDATE_CONSTANTS.action,
            message: constants.room.UPDATE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action: constants.room.UPDATE_CONSTANTS.action,
            message: constants.room.UPDATE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const DELETE = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action: constants.room.DELETE_CONSTANTS.action,
            message: constants.room.DELETE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action: constants.room.DELETE_CONSTANTS.action,
            message: constants.room.DELETE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const REMOVE = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action: constants.room.REMOVE_CONSTANTS.action,
            message: constants.room.REMOVE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action: constants.room.REMOVE_CONSTANTS.action,
            message: constants.room.REMOVE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const RESTORE = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action: constants.room.RESTORE_CONSTANTS.action,
            message: constants.room.RESTORE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action: constants.room.RESTORE_CONSTANTS.action,
            message: constants.room.RESTORE_CONSTANTS.message.failure,
            data: null
        }
    }

}

const RoomReponse = {
    GETALL,
    GETALL_DELETED,
    GETONEBYID,
    CREATE,
    UPDATE,
    DELETE,
    REMOVE,
    RESTORE
}
module.exports = RoomReponse
