import { roomService } from "services";
import { roomConstants } from "_constants/room.constants";

export const roomActions={
    getAll
}
function getAll() {
    return dispatch => {
        dispatch(request());
        roomService.getAll()
            .then(
                res => {
                    const rooms=res.data
                    if (rooms.length > 0) {
                        dispatch(success(rooms))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() { return { type: roomConstants.GETALL_REQUEST } }
    function success(rooms) { return { type: roomConstants.GETALL_SUCCESS, rooms } }
    function failure(error) { return { type: roomConstants.GETALL_FAILURE, error } }
}