import axiosClient from "../api/axiosClient";

export const addressService = {
    getAllProvince,
    getDistrictByProvinceCode,
    getWardByDistrictCode
}
function getAllProvince() {
    return axiosClient.get('/provinces');
}
function getDistrictByProvinceCode(code){ 
    return axiosClient.get(`/districts/getByProvinceCode/${code}`)
}
function getWardByDistrictCode(code){
return axiosClient.get(`/wards/getByDistrictCode/${code}`)
}
