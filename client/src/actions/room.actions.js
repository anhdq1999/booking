import { roomConstants } from '_constants';
import { roomsService } from 'services/roomsService';
import { alertActions } from './index';

export const roomActions = {
    getAll,
    getAllDeleted,
    delete: _delete
};
function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        roomsService.getAllDeleted()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure());
                        dispatch(alertActions.error(res.message))
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
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure())
                        dispatch(alertActions.error(res.message))
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: roomConstants.GETALL_REQUEST } }
    function success(rooms) { return { type: roomConstants.GETALL_SUCCESS, rooms } }
    function failure(error) { return { type: roomConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        roomsService.deleteUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }else{
                        dispatch(failure(id));
                        dispatch(alertActions.error(res.message))
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request(id) { return { type: roomConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: roomConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: roomConstants.DELETE_FAILURE, id, error } }
}