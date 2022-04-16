import axiosClient from "../api/axiosClient";
import { authHeader } from 'helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
   
};

function login(username, password) {
    const url = "/auth/login";

    return axiosClient.post(url, {username, password})
        .then(user => {
            if (user.accessToken) {
                localStorage.setItem("user", JSON.stringify(user));
            }
            return user;
        })
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

function register(user) {
    const url = "/auth/register";
    return axiosClient.post(url, user.username,user.password)
}

function update(user) {
    const url = `/users/${user._id}`;
    return axiosClient.put(url);
}


function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
}