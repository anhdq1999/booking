import axiosClient from "api/axiosClient";

export const roomService = {
    getAll,
}
function getAll() {
    const url = '/rooms/store';
    return axiosClient.get(url)
}