const roomConstants = {
    GETALL_CONSTANTS: {
        action: 'GET_ALL_ROOM',
        message: {
            success: 'Get all room successfully',
            failure: 'Get all room failure',
        },
    },
    GETALL_DELETED_CONSTANTS: {
        action: 'GET_ALL_DELETED_ROOM',
        message: {
            success: 'Get all deleted room successfully',
            failure: 'Get all deleted room failure',
        },
    },
    GETONE_CONSTANTS: {
        action: 'Get one by id',
        message: {
            success: 'Get one room successfully',
            failure: 'Get one room failure',
        },
    },
    CREATE_CONSTANTS: {
        action: 'CREATE_ROOM',
        message: {
            success: 'Create room successfully',
            failure: 'Create room failure',
        },
    },
    UPDATE_CONSTANTS: {
        action: 'UPDATE_ROOM',
        message: {
            success: 'Update room successfully',
            failure: 'Update room failure',
        },
    },
    DELETE_CONSTANTS: {
        action: 'DELETE_ROOM',
        message: {
            success: 'Delete room successfully',
            failure: 'Delete room failure',
        },
    },
    REMOVE_CONSTANTS: {
        action: 'REMOVE_ROOM',
        message: {
            success: 'Remove room successfully',
            failure: 'Remove room failure',
        },
    },
    RESTORE_CONSTANTS: {
        action: 'RESTORE_ROOM',
        message: {
            success: 'Restore room successfully',
            failure: 'Restore room failure',
        },
    },
};
module.exports = roomConstants;
