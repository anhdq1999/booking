const constants = require("../_constants")

const GETALL = {
   
    SUCCESS: (data) => {
        return {
            action:constants.user.GETALL_CONSTANTS.action,
            message: 'Get all user successfully',
            data: data
        }
    },
    FAILURE: () => {
        return {
            action:constants.user.GETALL_CONSTANTS.action,
            message: 'Get all user failure',
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
