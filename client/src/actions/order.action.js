import { history } from "helpers";
import { orderConstants } from "_constants";

export const orderActions = {
    getAll,
    getByUserId,
    initBookNowItem,
    initOrder,
    create,
    delele: _delete
};

function initBookNowItem(data) {
    return dispatch => {
        dispatch(success(data))
        history.push('/order')
    }
    function success(data) {
        return { type: orderConstants.CREATE_BOOKNOW_SUCCESS, payload: data }
    }
}
function initOrder(data) {
    return dispatch => {
        dispatch(success(data))
        history.push('/payment')
    }
    function success(data) {
        return { type: orderConstants.INIT_ORDER_SUCCESS, payload: data }
    }
}
function create(data) {
    return dispatch => {

    }
}
function getAll(data) {
    return dispatch => {

    }
}
function getByUserId(data) {
    return dispatch => {

    }
} function _delete(data) {
    return dispatch => {

    }
}