import { userActions } from 'actions';
import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'reactstrap';
import { userService } from 'services';

const header = [
  'STT',
  'Username',
  'Email',
  'Phone Number',
  'Full Name',
  'Address',
  'Role'
];

function Garbage(props) {
  const [users, setUsers] = useState([]);
  
  useEffect( () => {
    userService.getAllDeleted()
    .then(users =>  setUsers(users));
   
  }, [])
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/users-manager">Quay lại</Link>
      <Table responsive>
        <thead>
          <tr>
            {header.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 &&
            users.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td key={item.username}>{item.username}</td>
                  <td key={item.email}>{item.email}</td>
                  <td key={item.phone}>{item.phone}</td>
                  <td key={item.fullName}>{item.fullName}</td>
                  <td key={item.address}>{item.address}</td>
                  <td key={item.roles}>{item.roles}</td>
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
  getAllDeleted: userActions.getAllDeleted,
}
const connectedGarbagePage = connect(mapState, actionCreators)(Garbage)
export { connectedGarbagePage as Garbage }