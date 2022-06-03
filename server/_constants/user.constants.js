const userConstants = {
    GETALL_CONSTANTS:
    {
        action: 'GET_ALL_USER',
        message:{
            success:'Get all user successfully',
            failure:'Get all user failure'
        }
    },
    CREATE_CONSTANTS:{
        action:  'CREATE_USER',
        message: {
            success: 'create user successfully',
            failure: 'create user failed'
        }
    },
    UPDATE_CONSTANTS: {
        action:  'UPDATE_USER',
        message: {
            success: 'update user successfully',
            failure: 'update user failed'
        }
    },
    DELETE_CONSTANTS: {
        action:  'DELETE_USER',
        message: {
            success: 'delete user successfully',
            failure: 'delete user failed'
        }
    }
      ,
    REMOVE_CONSTANTS: {
        action:  'REMOVE_USER'  ,
        message: {
            success: 'remove user successfully',
            failure: 'remove user failed'
        }
    },
    RESTORE_CONSTANTS:{
        action:  'RESTORE_USER' ,
        message: {
            success: 'restore user successfully',
            failure: 'restore user failed'
        }
    },
    GET_BY_ID:{
        action:  'RESTORE_USER' ,
        message: {
            success: 'restore user successfully',
            failure: 'restore user failed'
        }
    }
}
module.exports = userConstants