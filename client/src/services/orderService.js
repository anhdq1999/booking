import axiosClient from "api/axiosClient";

export const orderService = {
    create
}
function create(data) {
    const url = '/orders/';
    return axiosClient.post(url, data)
}