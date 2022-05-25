import { roomConstants } from "_constants/room.constants";

export function rooms(state = {}, action) {
    switch (action.type) {
        case roomConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case roomConstants.GETALL_SUCCESS:
            return {
                rooms: action.rooms
            };
        case roomConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case roomConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {

            };
        case roomConstants.DELETE_SUCCESS:
            // remove deleted user from state
            return { ...state, rooms };
        case roomConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {

            };
        default:
            return state
    }
}