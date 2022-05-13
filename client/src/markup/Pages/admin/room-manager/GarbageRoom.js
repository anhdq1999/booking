import { roomActions } from 'actions';
import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'reactstrap';
import { roomsService } from 'services';

const header = [
    'STT',
    'NameRoom',
    'HostRoom',
    'Address',
    'Category',
    'shortDescription',
    'Description',
    'Image',
    'Price',
];

function GarbageRooom(props) {
  const [rooms, setrooms] = useState([]);
  
  useEffect( () => {
    roomsService.getAllDeleted()
    .then(rooms =>  setrooms(rooms));
   
  }, [])
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/rooms-manager">Quay lại</Link>
      <Table responsive>
        <thead>
          <tr>
            {header.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rooms && rooms.length > 0 &&
            rooms.map((item, index) => {
              return (
                <tr key={item._id}>
                <td key={item.name}>{item.name}</td>
                      <td key={item.host}>{item.host}</td>
                      <td key={item.address.province}>{item.address.province}</td>
                      <td key={item.category}>{item.category}</td>
                      <td key={item.shortDescription}>{item.shortDescription}</td>
                      <td key={item.description}>{item.description}</td>
                      <td key={item.image}>{item.image}</td>
                      <td key={item.price}>{item.price}</td>
                      
                </tr>
              )
            })
          }
        </tbody>

      </Table>
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