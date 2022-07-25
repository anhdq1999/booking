import axiosClient from "../api/axiosClient";

export const addressService = {
    getAllProvince,
    getDistrictByProvinceCode,
    getWardByDistrictCode,
    getProvinceByCode,
    getDistrictByCode,
    getWardByCode,
}
function getAllProvince() {
    return axiosClient.get('/provinces');
}
function getDistrictByProvinceCode(code) {
    return axiosClient.get(`/districts/getByProvinceCode/${code}`)
}
function getWardByDistrictCode(code) {
    return axiosClient.get(`/wards/getByDistrictCode/${code}`)
}
function getProvinceByCode(code){
    return axiosClient.get(`/provinces/${code}`)
}
function getDistrictByCode(code){
    return axiosClient.get(`/districts/${code}`)
}function getWardByCode(code){
    return axiosClient.get(`/wards/${code}`)
}