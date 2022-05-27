import { roomConstants } from '_constants';
import { roomsService } from 'services/roomsService';
import { alertActions } from './index';

export const roomActions = {
    getAll,
    getAllDeleted,
    create,
    update,
    delete: _delete
};
function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        roomsService.getAllDeleted()
            .then(
                rooms => {
                    if (rooms.length>0) {
                        dispatch(success(rooms))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: roomConstants.GETALL_REQUEST } }
    function success(rooms) { return { type: roomConstants.GETALL_SUCCESS, rooms } }
    function failure(error) { return { type: roomConstants.GETALL_FAILURE, error } }
}
function getAll() {
    return dispatch => {
        dispatch(request());
        roomsService.getAll()
            .then(
                room => {
                    if (room.length>0) {
                        dispatch(success(room))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: roomConstants.GETALL_REQUEST } }
    function success(room) { return { type: roomConstants.GETALL_SUCCESS, room } }
    function failure(error) { return { type: roomConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        roomsService.deleteUser(id)
            .then(
                res => {
                    dispatch(success(id));
                    alertActions.success(res.message)
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: roomConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: roomConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: roomConstants.DELETE_FAILURE, id, error } }
}
function create(room) {
    return dispatch => {
        dispatch(request(room));
        roomsService.create(room)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success('Create room successful'));
                    } else {
                        dispatch(failure(res.message));
                        dispatch(alertActions.error(res.message))
                    }
                })
            .catch(
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            );
    };
    function request(room) { return { type: roomConstants.CREATE_REQUEST, room } }
    function success(room) { return { type: roomConstants.CREATE_SUCCESS, room } }
    function failure(error) { return { type: roomConstants.CREATE_FAILURE, error } }
}
function update(room, data) {
    return dispatch => {
        dispatch(request(room))
        roomsService.update(room, data)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data))
                    console.log(res.data);
                    dispatch(alertActions.success(res.message))
                }
            }).catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
            })
    }
    function request(room) { return { type: roomConstants.UPDATE_REQUEST, room } }
    function success(room) { return { type: roomConstants.UPDATE_SUCCESS, room } }
    function failure(error) { return { type: roomConstants.UPDATE_FAILURE, error } }
}