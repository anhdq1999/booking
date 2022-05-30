const constants = require("../_constants")

const GETALL = {
   
    SUCCESS: (data) => {
        return {
            success:true,
            action:constants.user.GETALL_CONSTANTS.action,
            message:constants.user.GETALL_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE: () => {
        return {
            success:false,
            action:constants.user.GETALL_CONSTANTS.action,
            message: constants.user.GETALL_CONSTANTS.message.failure,
            data: null
        }
    }

}
const CREATE = {
   
    SUCCESS: (data) => {
        return {
<<<<<<< HEAD
            action: constants.user.CREATE_CONSTANTS,
            message: 'Create user successfully',
=======
            success:true,
            action: constants.user.CREATE_CONSTANTS.action,
            message: constants.user.CREATE_CONSTANTS.message.success,
>>>>>>> 056ba7dcd68ecc59d10eb193defd991d86ca001d
            data: data
        }
    },
    FAILURE: () => {
        return {
<<<<<<< HEAD
            action: constants.user.CREATE_CONSTANTS,
            message: 'Create user failure',
=======
            success:false,
            action: constants.user.CREATE_CONSTANTS.action,
            message: constants.user.CREATE_CONSTANTS.message.failure,
>>>>>>> 056ba7dcd68ecc59d10eb193defd991d86ca001d
            data: null
        }
    }

}
<<<<<<< HEAD
const UserReponse = {
    GETALL,
    CREATE
=======
const UPDATE = {
    SUCCESS:(data) =>{
        return{
            success:true,
            action:constants.user.UPDATE_CONSTANTS.action,
            message: constants.user.UPDATE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE:() =>{
        return{
            success:false,
            action:constants.user.UPDATE_CONSTANTS.action,
            message: constants.user.UPDATE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const DELETE = {
    SUCCESS:(data) =>{
        return{
            success:true,
            action:constants.user.DELETE_CONSTANTS.action,
            message: constants.user.DELETE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE:() =>{
        return{
            success:false,
            action:constants.user.DELETE_CONSTANTS.action,
            message: constants.user.DELETE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const REMOVE = {
    SUCCESS:(data) =>{
        return{
            success:true,
            action:constants.user.REMOVE_CONSTANTS.action,
            message: constants.user.REMOVE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE:() =>{
        return{
            success:false,
            action:constants.user.REMOVE_CONSTANTS.action,
            message: constants.user.REMOVE_CONSTANTS.message.failure,
            data: null
        }
    }

}
const RESTORE = {
    SUCCESS:(data) =>{
        return{
            success:true,
            action:constants.user.RESTORE_CONSTANTS.action,
            message: constants.user.RESTORE_CONSTANTS.message.success,
            data: data
        }
    },
    FAILURE:() =>{
        return{
            success:false,
            action:constants.user.RESTORE_CONSTANTS.action,
            message: constants.user.RESTORE_CONSTANTS.message.failure,
            data: null
        }
    }

}




const UserReponse = {
    GETALL,
    CREATE,
    UPDATE,
    DELETE,
    REMOVE,
    RESTORE
>>>>>>> 056ba7dcd68ecc59d10eb193defd991d86ca001d
}
module.exports = UserReponse
