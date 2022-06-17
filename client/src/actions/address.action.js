
import { addressService } from 'services';
import { addressConstants } from '_constants';

export const addressActions = {
    getAllProvince,
    getAllDistrict,
    getAllWard
};

function getAllProvince() {
    return dispatch => {
        addressService.getAllProvince()
            .then(res => dispatch(success(res.data)))
    }
    function success(provinces) { return { type: addressConstants.GET_ALL_PROVINCE, payload: provinces } }
}

function getAllDistrict(code) {
    return dispatch => {
        addressService.getDistrictByProvinceCode(code)
            .then(res => dispatch(success(res.data)))
    }
    function success(districts) { return { type: addressConstants.GET_ALL_DISTRICT, payload: districts } }
}

function getAllWard(code) {
    return dispatch => {
        addressService.getWardByDistrictCode(code)
            .then(res => dispatch(success(res.data)))
    }
    function success(wards) { return { type: addressConstants.GET_ALL_WARD, payload: wards } }
}