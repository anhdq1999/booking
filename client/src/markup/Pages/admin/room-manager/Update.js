import { roomActions } from 'actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { roomsService } from 'services'

function Update(props) {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.roomReducer.items)
    useEffect(() => {
        dispatch(roomActions.getAll())
    }, [dispatch])

    return (

        <div>
            {rooms && rooms.forEach((value, index) => {
               
                    value.slug=undefined;
                    roomsService.update(value._id, value).then(res => {
                        console.log(value.name + ' : ' + res.message);
                    })
                
            })
            }
            <h1>UPDATAEEEEEEEEEEEEEEEEEEEEE</h1>


        </div>
    )
}
export default Update 