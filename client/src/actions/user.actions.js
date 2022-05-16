import { userConstants } from '_constants';
import { userService } from 'services';
import { alertActions } from './index';
import { history } from 'helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getAllDeleted,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data));
                    localStorage.setItem('USER', JSON.stringify(res.data))
                    history.push('/');
                } else {
                    dispatch(failure(res.message));
                    dispatch(alertActions.error(res.message));
                }
            }).catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
            });


    };

    function request(username) { return { type: userConstants.LOGIN_REQUEST, username } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success());
                        history.push('/login');
                        dispatch(alertActions.success('Registration successful'));
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

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        userService.getAllDeleted()
            .then(
                users => {
                    if (users.length > 0) {
                        dispatch(success(users))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
function getAll() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                users => {
                    if (users.length > 0) {
                        dispatch(success(users))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        userService.deleteUser(id)
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

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}