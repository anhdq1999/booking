import axiosClient from "../api/axiosClient";
import { authHeader } from 'helpers';

export const    userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    getAllDeleted,
    update,
    deleteUser,
    removeUser,
    restoreUser,
    getCurrentUser,
};

function login(username, password) {
    const url = "/auth/login";
    return axiosClient.post(url, username, password);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const url = "/users/store";
    return axiosClient.get(url);
}

function getById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
}
function getAllDeleted() {
    const url = `/users/garbage`;
    return axiosClient.get(url);
}

function register(user) {
    const url = "/auth/register";
    return axiosClient.post(url,user)
}

function update(user) {
    const url = `/users/${user._id}`;
    return axiosClient.put(url);
}
function deleteUser(id){
    const url =`users/${id}/delete`;
    return axiosClient.delete(url);
}
function removeUser(id){
    const url =`users/remove/${id}`;
    return axiosClient.delete(url);
}
function restoreUser(id){
    const url =`users/restore/${id}`;
    return axiosClient.post(url);
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
}
