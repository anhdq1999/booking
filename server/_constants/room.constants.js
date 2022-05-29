const roomConstants = {
    GETALL_CONSTANTS:
    {
        action: 'GET_ALL_ROOM',
        message:{
            success:'Get all room successfully',
            failure:'Get all room failure'
        }
    },
    CREATE_CONSTANTS: 
    {
        action: 'CREATE_ROOM',
        message:{
            success:'Create room successfully',
            failure:'Create room failure'
        }
    },
    UPDATE_CONSTANTS: 
    {
        action: 'UPDATE_ROOM',
        message:{
            success:'Update room successfully',
            failure:'Update room failure'
        }
    },
    DELETE_CONSTANTS: {
        action: 'DELETE_ROOM',
        message:{
            success:'Delete room successfully',
            failure:'Delete room failure'
        }
    },
    REMOVE_CONSTANTS: {
        action: 'REMOVE_ROOM',
        message:{
            success:'Remove room successfully',
            failure:'Remove room failure'
        }
    },
    RESTORE_CONSTANTS: {
        action: 'RESTORE_ROOM',
        message:{
            success:'Restore room successfully',
            failure:'Restore room failure'
        }
    },
}
module.exports = roomConstants