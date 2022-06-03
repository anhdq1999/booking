import { alertActions, roomActions, userActions } from 'actions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import RoomModal from './RoomModal';
import { roomsService } from 'services';

function RoomsManager(props) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [editableRoom, setEditableRoom] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState([]);
  const alert = useSelector(state => state.alert);
  const rooms = useSelector(state => state.roomReducer.items)
  const users = useSelector(state => state.userReducer.items)
  const pending = useSelector(state => state.roomReducer.loading)
  const dispatch = useDispatch();
  const columns = [
    {
      name: 'Room Name',
      selector: row => row.name
    },
    {
      name: 'Host',
      selector: row => row.host
    },
    {
      name: 'Type',
      selector: row => row.category
    },
    {
      name: 'Price',
      selector: row => row.price
    },
    {
      buttons: true,
      cell: (column) =>
      (<>
        <Button onClick={() => handleEdit(column)}>Edit</Button>
        <Button onClick={() => handleDelete(column)}>Delete</Button>
      </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    }

  ]
  useEffect(() => {
    dispatch(roomActions.getAll())
    dispatch(userActions.getAll())
  }, [dispatch])


  function handleDelete(rooms) {
    const id = rooms._id;
    dispatch(roomActions.delete(id))
  }
  const handleDeleteMany = () => {
    if (selectedRooms.length > 0) {
      selectedRooms.forEach((value) => {
        handleDelete(value)
      })
    } else {
      dispatch(alertActions.error("Chưa chọn room để xóa"))
    }
  }
  const handleChange = ({ selectedRows }) => {
    setSelectedRooms(selectedRows)
  };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  const handleAdd = () => {
    setIsAddModal(true)
    setEditableRoom();
    handleOpenModal()
  }
  const handleEdit = (room) => {
    setIsAddModal(false)
    setEditableRoom(room)
    handleOpenModal()
  }
  return (
    <div>
      <div className="mt-5 mx-5">

        <Link to='/admin/rooms-manager/garbage'>Thùng rác của tôi</Link>

        <div className="text-right mb-5">
          <Button onClick={()=> handleAdd()}>Add</Button>
          <Button onClick={() => handleDeleteMany()}>Delete</Button>
        </div>
      {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <DataTable
          title='Room Store'
          columns={columns}
          data={rooms}
          theme="dark"
          selectableRows
          onSelectedRowsChange={handleChange}
          pagination
          progressPending={pending}
        />
      </div>
      {rooms>0 && rooms.slice(0, 5).forEach((value, index )=> {
                if (value.host === '627c8413d1273ac87c40d6bf') {
                    value.host = '627d20e157fd988f8553025e'
                } else {
                    value.host = '627d20fb57fd988f85530261'
                }
                roomsService.update(value._id, value).then(res => {
                    console.log(value.name + ' : ' + res.message);
                })
            })}
      {isAddModal &&
         <RoomModal
         isAdd={isAddModal}
         isOpen={isOpenModal}
         toggle={handleOpenModal}
       ></RoomModal>
      }
      {!isAddModal &&
         <RoomModal
         isAdd={isAddModal}
         room={editableRoom}
         isOpen={isOpenModal}
         toggle={handleOpenModal}
       ></RoomModal>
      }
    </div>
  )
}

export default RoomsManager
