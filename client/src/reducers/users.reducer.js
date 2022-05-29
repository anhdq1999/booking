import { userConstants } from '_constants';
const initialState = {
  items: [],
  editUser: {},
  createUser: {}
}
export function userReducer(state = initialState, action) {
  let items = state.items
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users,
        loading: false
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.GETALL_DELETED_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_DELETED_SUCCESS:
      return {
        loading: false,
        items: action.users
      };
    case userConstants.GETALL_DELETED_FAILURE:
      return {
        error: action.error
      };

    case userConstants.CREATE_REQUEST:
      state.createUser = action.user
      return {
        ...state
      };
    case userConstants.CREATE_SUCCESS:
      items.push(action.user);
      items=items.filter(user => user._id !=='')
      return {
        ...state,
        items,
        createUser: {}
      };

    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
        editUser: action.user,
      };
    case userConstants.UPDATE_SUCCESS:
      const editUserIndex = items.findIndex(user => user._id === action.user._id)
      items[editUserIndex] = action.user
      items = items.filter(user => user._id !== "")
      return {
        ...state,
        items,
        editUser: action.user,
      };
    case userConstants.RESTORE_SUCCESS:
      items = items.filter(user => user._id !== action.id)
      return { ...state, items };
    case userConstants.REMOVE_SUCCESS:

      items = items.filter(user => user._id !== action.id)
      return { ...state, items };

    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      items = items.filter(user => user._id !== action.id)
      return { ...state, items };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        })
      };
    default:
      return state
  }
}