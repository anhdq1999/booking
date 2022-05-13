import { roomActions } from 'actions/room.actions';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'reactstrap';
import { roomsService, userService } from 'services';
import EditRoomsModal from './EditRoomsModal';

function RoomsManager(props) {

    const [rooms, setRooms] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    useEffect(() => {
      roomsService.getAll()
      .then(rooms  => setRooms(rooms) )
       
    },[])
  
  
    const handleEditRoomModal = () => {
      setIsShowModal(true)
    }
    const toggle = () => {
      setIsShowModal(false)
    }
    const header = [
      'STT',
      'Tên Phòng',
      'Chủ Phòng',
      'Thành Phố',
      'Loại Phòng',
      'Mô tả',
      'Nội dung',
      'Hình',
      'Giá',
      // 'Rating',
      // 'NumReviews',
      // 'Reviews',
      'Chức năng'
      
       
    ];
    // const handleDelete = (room) => {
    //   props.delete(room)
    // }
    return (
      <div>
        <div className="title text-center"><h1>Manage Room</h1></div>
        <div className="mt-3 mx-3">
          <Link to='/admin/room-manager/garbage' variant= "contained">Thùng rác của tôi</Link>
          <Table id="rooms" res ponsive>
            <thead>
              <tr className='text-center small' >
                {header.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rooms && rooms.length > 0 &&
                rooms.map((item, index) => {
                  return (
                    <tr className='small ' key={item._id}>
                      <th scope="row" >{index + 1}</th>
                      <td key={item.name}>{item.name}</td>
                      <td key={item.host}>{item.host}</td>
                      <td key={item.address.province}>{item.address.province}</td>
                      <td key={item.category}>{item.category}</td>
                      <td key={item.shortDescription}>{item.shortDescription}</td>
                      <td key={item.description}>{item.description}</td>
                      <td key={item.image}>{item.image}</td>
                      <td key={item.price}>{item.price}</td>
                      <td >
                          <ul  style={{liststyle: 'none', backgroundColor: 'none'}} >
                          <li > <button class = " btn-sm btn-default" onClick={handleEditRoomModal}><Link class= "fa fa-edit"></Link></button></li>
                          <li ><button class=" btn-sm btn-default"  > <Link class= "fa fa-eraser"></Link></button></li>
                          <EditRoomsModal
                          isOpen={isShowModal}
                          toggle={toggle}
                          room={item}
                        ></EditRoomsModal>
                         
                        </ul>
                      </td>
                    </tr>
                  )
                })
              }
  
            </tbody>
  
          </Table>
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