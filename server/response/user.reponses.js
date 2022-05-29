const constants = require("../_constants")

const GETALL = {
   
    SUCCESS: (data) => {
        return {
            action:constants.user.GETALL_CONSTANTS.action,
            message: constants.user.GETALL_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            action:constants.user.GETALL_CONSTANTS.action,
            message: constants.user.GETALL_CONSTANTS.message.failure,
            data: null
        }
    }

}
const CREATE = {
   
    SUCCESS: (data) => {
        return {
            action: constants.user.CREATE_CONSTANTS,
            message: 'Create user successfully',
            data: data
        }
    },
    FAILURE: () => {
        return {
            action: constants.user.CREATE_CONSTANTS,
            message: 'Create user failure',
            data: null
        }
    }

}
const UserReponse = {
    GETALL,
    CREATE
}
module.exports = UserReponse
