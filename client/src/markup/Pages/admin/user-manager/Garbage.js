import { userActions } from 'actions';
import React, { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
import { userService } from 'services';
import DataTable from 'react-data-table-component';
import './styles.css'

function Garbage(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAllDeleted()
      .then(x => setUsers(x));
  }, []);

  function handleDelete(user) {
    userService.removeUser(user._id)
      .then(res => {
        if (res.success) setUsers(users => users.filter(x => x._id !== user._id))
      })
  }

  function handleRestore(user) {
    userService.restoreUser(user._id)
      .then(res => {
        if (res.success) setUsers(users => users.filter(u => u._id !== user._id))
      })
  }

  const columns = useMemo(
    () => [
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
        selector: row => row.phoneNumber
      },
      {
        name: 'Full Name',
        selector: row => row.fullname,
        sortable: true
      },
      {
        name: 'Address',
        selector: row => row.address
      },
      {
        name: 'Role',
        selector: row => row.roles,
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

  const handleEdit = () => {

  }
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/users-manager">Quay lại</Link>
      <DataTable
        title='User Garbage'
        columns={columns}
        data={users}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
        theme="dark"
      />
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