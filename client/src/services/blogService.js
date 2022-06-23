import axiosClient from "api/axiosClient"

export const blogService = {
    getAll,
    getById,
    create,
    update,
    _delete,
}
function getAll() {
    const url = '/blogs'
    return axiosClient.get(url)
}
function getById(id) {
    const url = `/blogs/${id}`
    return axiosClient.get(url)
}
function create(blog) {
    const url = '/blogs/';
    return axiosClient.post(url, blog);
}
function update(id, blogData) {
    const url = `/blogs/${id}`
    return axiosClient.put(url, blogData)
}
function _delete(id){
    const url = `/blogs/${id}`
    return axiosClient.delete(url)
}