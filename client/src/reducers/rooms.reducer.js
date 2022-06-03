import { roomConstants } from "_constants/room.constants";
<<<<<<< HEAD
const initialState = {
    items: [],
    newRoom: {},
    editRoom: {}
}

export function roomReducer(state = initialState, action) {
    let items = state.items
=======
const initialState={
    items:[],
    newRoom:{}, 
    editRoom:{}
}

export function roomReducer(state = initialState, action) {
    let items= state.items
>>>>>>> Doan
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
<<<<<<< HEAD
                items: action.rooms,
                loading: false
=======
                items: items
>>>>>>> Doan
            };
        case roomConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
<<<<<<< HEAD
        case roomConstants.GETALL_DELETED_REQUEST:
            return {
                loading: true
            };
        case roomConstants.GETALL_DELETED_SUCCESS:
            return {
                loading: false,
                items: action.rooms
            };
        case roomConstants.GETALL_DELETED_FAILURE:
            return {
                error: action.error
            };
        case roomConstants.GETALL_REQUEST:
            return {
                loading: true

            };
        case roomConstants.CREATE_REQUEST:
            state.createRoom = action.room
=======

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
>>>>>>> Doan
            return {
                ...state
            };
        case roomConstants.CREATE_SUCCESS:
            items.push(action.room);
            items = items.filter(room => room._id !== '')
            return {
                ...state,
                items,
                createRoom: {}
            };

        case roomConstants.UPDATE_REQUEST:
            return {
                ...state,
                editRoom: action.room,
            };
        case roomConstants.UPDATE_SUCCESS:
            const editRoomIndex = items.findIndex(room => room._id === action.room._id)
            items[editRoomIndex] = action.room
            items = items.filter(room => room._id !== "")
            return {
                ...state,
                items,
                editroom: action.room,
            };
        case roomConstants.RESTORE_SUCCESS:
            items = items.filter(room => room._id !== action.id)
            return { ...state, items };
        case roomConstants.REMOVE_SUCCESS:

            items = items.filter(room => room._id !== action.id)
            return { ...state, items };
        case roomConstants.DELETE_REQUEST:
            // add 'deleting:true' property to room being deleted
            return {
                ...state
            };
        case roomConstants.DELETE_SUCCESS:
            // remove deleted room from state
            items = items.filter(room => room._id !== action.id)
            return { ...state, items };
        case roomConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to room 
            return {
                ...state,
        items: state.items.map(room => {
          if (room.id === action.id) {
            const { deleting, ...roomCopy } = room;
            return { ...roomCopy, deleteError: action.error };
          }
          return room;
        })
            };
        default:
            return state
    }
}