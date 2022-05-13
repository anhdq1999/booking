import axiosClient from "../api/axiosClient";


export const roomsService = {
    getAll,
    getById,
    getAllDeleted,
    update,
    deleteRoom,
 
};



function getAll() {
    const url = "/rooms/store";
    return axiosClient.get(url);
    
}

function getById(id) {
    const url = "/rooms/${id}";
    return axiosClient.get(url);
}
function getAllDeleted() {
    const url = "/rooms/garbage";
    return axiosClient.get(url);
}
    

function update(room) {
    const url = "/rooms/${room._id}";
    return axiosClient.put(url);
}
function deleteRoom(id){
    const url ="rooms/${id}/delete";
    return axiosClient.delete(url);
}

