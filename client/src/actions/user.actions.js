import { userConstants } from '_constants';
import { userService } from 'services';
import { alertActions } from './index';
import { history } from 'helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    create,
    update,
    getAllDeleted,
    delete: _delete,
    restore,
    remove
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data));
                    localStorage.setItem('user', JSON.stringify(res.data))
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
function create(user) {
    return dispatch => {
        dispatch(request(user));
        userService.create(user)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success(res.message));
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

    function request(user) { return { type: userConstants.CREATE_REQUEST, user } }
    function success(user) { return { type: userConstants.CREATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CREATE_FAILURE, error } }
}
function update(user, data) {
    return dispatch => {
        dispatch(request(user))
        userService.update(user, data)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data))
                    dispatch(alertActions.success(res.message))
                }
            }).catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
            })
    }
    function request(user) { return { type: userConstants.UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}
function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        userService.getAllDeleted()
            .then(
                res => {
                    console.log(res);
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure())
                        dispatch(alertActions.failure(res.message))

                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: userConstants.GETALL_DELETED_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_DELETED_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_DELETED_FAILURE, error } }
}
function getAll() {
    return (dispatch) => {
        dispatch(request());
        userService.getAll()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    }
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
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
            })

    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
function restore(id) {
    return dispatch => {
        userService.restoreUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            })

    };

    function success(id) { return { type: userConstants.RESTORE_SUCCESS, id } }
}
function remove(id) {
    return dispatch => {
        userService.removeUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            })

    };

    function success(id) { return { type: userConstants.REMOVE_SUCCESS, id } }
}