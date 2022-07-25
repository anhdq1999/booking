const userConstants = {
    GETALL_CONSTANTS: {
        action: 'GET_ALL_USER',
        message: {
            success: 'Get all user successfully',
            failure: 'Get all user failure',
        },
    },
    GETALL_DELETED_CONSTANTS: {
        action: 'GET_ALL_DELETED_USER',
        message: {
            success: 'Get all deleted user  successfully',
            failure: 'Get all deleted user failure',
        },
    },
    CREATE_CONSTANTS: {
        action: 'CREATE_USER',
        message: {
            success: 'create user successfully',
            failure: 'create user failed',
            failure_exist: 'User is existed',
        },
    },
    UPDATE_CONSTANTS: {
        action: 'UPDATE_USER',
        message: {
            success: 'update user successfully',
            failure: 'update user failed',
        },
    },
    DELETE_CONSTANTS: {
        action: 'DELETE_USER',
        message: {
            success: 'delete user successfully',
            failure: 'delete user failed',
        },
    },
    REMOVE_CONSTANTS: {
        action: 'REMOVE_USER',
        message: {
            success: 'remove user successfully',
            failure: 'remove user failed',
        },
    },
    RESTORE_CONSTANTS: {
        action: 'RESTORE_USER',
        message: {
            success: 'restore user successfully',
<<<<<<< HEAD
            failure: 'restore user failed'
        }
    },
    GETBYID_CONSTANTS:{
        action: 'GETBYID_USER',
        message:{
            success: 'get user successfully',
            failure: 'get user failed'
        }
    }
}
module.exports = userConstants
=======
            failure: 'restore user failed',
        },
    },
    GET_BY_ID: {
        action: 'RESTORE_USER',
        message: {
            success: 'restore user successfully',
            failure: 'restore user failed',
        },
    },
};
module.exports = userConstants;
>>>>>>> master
