import { userActions } from 'actions';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { userService } from 'services';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';

function UsersManager(props) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAll()
      .then(users => setUsers(users))
  }, [])

  function handleDelete(user) {
    const id = user._id;
    userService.deleteUser(id)
      .then(res => {
        if (res.success) setUsers(users => users.filter(users => users._id !== id))
      })
  }

  const columns = [
    {
      name: 'Username',
      selector: row => row.username
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Phone Number',
      selector: row => row.phone
    },
    {
      name: 'Full Name',
      selector: row => row.fullname
    },
    {
      name: 'Address',
      selector: row => row.address
    },
    {
      name: 'Role',
      selector: row => row.roles
    },
    {
      buttons: true,
      cell: (column) =>
      (<>
        <Button>Edit</Button>
        <Button onClick={() => handleDelete(column)}>Delete</Button>
      </>
      ),
      // buttons: true,
      allowOverflow: true,
    }
  ]
  return (
    <div>
      <div className="mt-5 mx-5">

        <Link to='/admin/users-manager/garbage'>Thùng rác của tôi</Link>
        <DataTable
          columns={columns}
          data={users}
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
  getAll: userActions.getAll,
  delete: userActions.delete
}
const connectedUsersManagerPage = connect(mapState, actionCreators)(UsersManager)
export { connectedUsersManagerPage as UsersManager }