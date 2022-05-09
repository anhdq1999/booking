import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userActions } from 'actions';
import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'reactstrap'
import { userService } from 'services';
import EditUserModal from './EditUserModal';

// const dataName =[
//   username,
//   password,
//   email, 
//   phone,
//   fullName,
//   address,
//   roles
// ];

function UsersManager(props) {

  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  useEffect(() => {
    userService.getAll()
    .then(users => setUsers(users))
  },[])

  const handleEditUserModal = () => {
    setIsShowModal(true)
  }
  const toggle = () => {
    setIsShowModal(false)

  }
  const header = [
    'STT',
    'Username',
    'Email',
    'Phone Number',
    'Full Name',
    'Address',
    'Role',
    'Action'
  ];
  const handleDelete = (user) => {
    props.delete(user)
  }
  return (
    <div>
      <div className="title text-center">Manage User</div>
      <div className="mt-5 mx-5">

        <Link to='/admin/users-manager/garbage'>Thùng rác của tôi</Link>
        <Table id="users" responsive>
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
                    <td>
                      <button onClick={handleEditUserModal}>EDIT</button>
                      <button>DELETE</button>
                      <EditUserModal
                        isOpen={isShowModal}
                        toggle={toggle}
                        user={item}
                      ></EditUserModal>
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
  getAll: userActions.getAll,
  delete: userActions.delete
}
const connectedUsersManagerPage = connect(mapState, actionCreators)(UsersManager)
export { connectedUsersManagerPage as UsersManager }