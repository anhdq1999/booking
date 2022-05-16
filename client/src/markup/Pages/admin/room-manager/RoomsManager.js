import { roomActions } from 'actions/room.actions';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { roomsService } from 'services';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';


function RoomsManager(props) {



  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    roomsService.getAll()
      .then(res => setRooms(res.data))
  }, [])


// 
  function handleDelete(rooms) {
    const id = rooms._id;
    // console.log(id);
    roomsService.deleteRoom(id)
      .then(res => {
        if (res.success) setRooms(rooms => rooms.filter(rooms => rooms._id !== id))
      });
  }

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
      name: 'Action',
      buttons: true,
      cell: (column) =>
      (<>
        <Button >Edit</Button>
        <Button onClick={() => handleDelete(column)}>Delete</Button>
      </>
      ),
      allowOverflow: true,
    }

  ]


  return (
    <div>
      <div className="mt-5 mx-5">

        <Link to='/admin/rooms-manager/garbage'>Thùng rác của tôi</Link>
        <DataTable
          columns={columns}
          data={rooms}
          theme="dark"
          selectableRows
          pagination />
      </div>
    </div>
  )
}

function mapState(state) {

}
const actionCreators = {
  getAll: roomActions.getAll,
  delete: roomActions.delete
}
const connectedRoomsManagerPage = connect(mapState, actionCreators)(RoomsManager)
export { connectedRoomsManagerPage as RoomsManager }