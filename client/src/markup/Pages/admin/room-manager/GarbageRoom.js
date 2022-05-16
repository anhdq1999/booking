import { roomActions } from 'actions';
import React, { useMemo, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import { roomsService } from 'services';
import './styles.css'


function GarbageRooom(props) {
  const [rooms, setRooms] = useState([]);
  
  useEffect( () => {
  
    roomsService.getAllDeleted()
    .then(x =>  console.log(setRooms(x)));
   
  }, []);

function handleDelete(rooms) {
  roomsService.removeRoom(rooms._id)
    .then(res => {
      if (res.success) setRooms(rooms => rooms.filter(x => x._id !== rooms._id))
    })
}
function handleRestore(rooms) {
  const id = rooms._id;
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
  ],[])
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/rooms-manager">Quay lại</Link>
      <DataTable
        title='Room Garbage'
        columns={columns}
        data={rooms}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
        theme="dark" />
    </div>
  )
}
function mapState(state) {
}
const actionCreators = {
  getAllDeleted: roomActions.getAllDeleted,
}
const connectedGarbagePage = connect(mapState, actionCreators)(GarbageRooom)
export { connectedGarbagePage as GarbageRoom }