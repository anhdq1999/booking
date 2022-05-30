import axiosClient from "../api/axiosClient";


export const roomsService = {
    getAll,
    getById,
    getAllDeleted,
    update,
    create,
    deleteRoom,
    removeRoom,
    restoreRoom
};



function getAll() {
    const url = `/rooms`;
    return axiosClient.get(url);
    
}

function getById(id) {
    const url = `/rooms/${id}`;
    return axiosClient.get(url);
}
function getAllDeleted() {
    const url = `/rooms/garbage`;
    return axiosClient.get(url);
}
    
function create(room){
    const url=`/rooms`;
    return axiosClient.post(url,room)
}
function update(id,newRoom) {
    const url = `/rooms/${id}`;
    return axiosClient.put(url,newRoom);
}
function deleteRoom(id){
    const url =`rooms/${id}`;
    return axiosClient.delete(url);
}

function removeRoom(id){
    const url =`rooms/remove/${id}`;
    return axiosClient.delete(url);
}
function restoreRoom(id){
    const url =`rooms/restore/${id}`;
    return axiosClient.post(url);
}

