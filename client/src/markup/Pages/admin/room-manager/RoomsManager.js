import { alertActions, roomActions } from 'actions';
import Header from 'markup/Layout/Header';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
import RoomModal from './RoomModal';

function RoomsManager(props) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [editableRoom, setEditableRoom] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState([]);
  const alert = useSelector(state => state.alert);
  const rooms = useSelector(state => state.roomReducer.items)
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
  }, [dispatch]);

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
      <Header/>
      <div className="mt-5 mx-5">

        <Link to='/admin/rooms-manager/garbage'>Thùng rác của tôi</Link>

        <div className="text-right mb-5">
          <Button onClick={() => handleAdd()}>Add</Button>
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
