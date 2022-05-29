import { roomConstants } from "_constants/room.constants";
const initialState={
    items:[],
    newRoom:{}, 
    editRoom:{}
}

export function roomReducer(state = initialState, action) {
    let items= state.items
    switch (action.type) {
        case roomConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case roomConstants.GETALL_SUCCESS:
            items =action.rooms;
            items.forEach(room=> room.image =room.image.replace("images/",""))
            console.log(items);
            return {
                items: items
            };
        case roomConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case roomConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state
            };
        case roomConstants.DELETE_SUCCESS:
            // remove deleted user from state
            items = items.filter(room => room._id !== action.id)
            return { ...state,items };
        case roomConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {

            };
        default:
            return state
    }
}