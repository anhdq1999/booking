import { roomActions } from 'actions';
import React, { useMemo, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import { roomsService } from 'services';
import './styles.css'


function GarbageRoom(props) {
  const noDataComponentContent = 'Thùng rác rỗng';
  const [pending, setPending] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  useEffect(() => {
    roomsService.getAllDeleted()
      .then(rooms => {
        setRooms(rooms)
        setPending(false)
      });
  }, []);

  function handleDelete(room) {
    roomsService.removeRoom(room._id)
      .then(res => {
        if (res.success) setRooms(rooms => rooms.filter(rooms => rooms._id !== room._id))
      })
  }
  function handleRestore(room) {
    const id = room._id;
    roomsService.restoreRoom(id)
      .then(res => {
        if (res.success) setRooms(rooms => rooms.filter(rooms => rooms._id !== id))
      })
  }

  const columns = useMemo(
    () => [
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
        cell: (column) =>
        (<>
          <Button onClick={() => handleRestore(column)}>Restore</Button>
          <Button onClick={() => handleDelete(column)}>Delete</Button>
        </>
        ),
        buttons: true,
        allowOverflow: true,
      }
    ], [])
  const handleChange = ({ selectedRows }) => {
    setSelectedRooms(selectedRows)
  };
  const handleRestoreMany = () => {
    if (selectedRooms.length>0) {
      selectedRooms.forEach((value) => {
        handleRestore(value)
      })
    }else{
      alert('Chưa chọn room cần hồi phục')
    }
  }
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/rooms-manager">Quay lại</Link>
      <div className="text-right mb-5">
        <Button onClick={() => handleRestoreMany()}>Restore</Button>
      </div>
      <DataTable
        title='Room Garbage'
        columns={columns}
        data={rooms}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
        theme="dark"
        noDataComponent={noDataComponentContent}
        progressPending={pending} />
    </div>
  )
}

export default GarbageRoom 