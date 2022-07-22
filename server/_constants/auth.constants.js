const authConstants = {
    REGISTER_CONSTANTS: {
        action: 'REGISTER_USER',
        message: {
            success: 'Register User successfully',
            failure: 'Register User failure',
        },
    },
    LOGIN_CONSTANTS: {
        action: 'LOGIN_USER',
        message: {
            success: 'LOGIN User successfully',
            failure: 'LOGIN User failure',
        },
    },
    EDIT_USER_CONSTANTS: {
        action: 'EDIT_USER_USER',
        message: {
            success: 'EDIT_USER User successfully',
            failure: 'EDIT_USER User failure',
        },
    },
    JWT_CONSTANTS: {
        action: 'JWT_USER',
        message: {
            success: 'JWT User successfully',
            failure: 'JWT User failure',
        },
    }
}
module.exports = authConstants;