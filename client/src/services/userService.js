import axiosClient from "../api/axiosClient";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    getAllDeleted,
    create,
    update,
    deleteUser,
    removeUser,
    restoreUser,
    getCurrentUser,
    registerVertified,
    forgot,
    resetPassword
};
function resetPassword(data){
    const url = "/auth/reset-password";
    return axiosClient.post(url, data);
}
function forgot(email){
    const url = "/auth/forgot";
    return axiosClient.post(url, email);
}
function registerVertified(e,v){
    const url = "/auth/register-verify";
    return axiosClient.post(url, {e, v});
}
function login(username, password) {
    const url = "/auth/login";
    return axiosClient.post(url, username, password);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const url = "/users";
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
    return axiosClient.post(url, user)
}

function create(user) {
    const url = "/users";
    return axiosClient.post(url, user)
}
function update(user, newUser) {
    const url = `/users/${user._id}`;
    return axiosClient.put(url, newUser);
}
function deleteUser(id) {
    const url = `users/${id}`;
    return axiosClient.delete(url);
}
function removeUser(id) {
    const url = `users/remove/${id}`;
    return axiosClient.delete(url);
}
function restoreUser(id) {
    const url = `users/restore/${id}`;
    return axiosClient.post(url);
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

