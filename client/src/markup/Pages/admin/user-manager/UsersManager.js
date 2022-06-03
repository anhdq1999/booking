import { alertActions, userActions } from 'actions';
import Header from 'markup/Layout/Header';
import Header2 from 'markup/Layout/Header2';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
import UserModal from './UserModal';


function UsersManager(props) {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [editableUser, setEditableUser] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isAddModal, setIsAddModal] = useState(false)
  const alert = useSelector(state => state.alert)
  const users = useSelector(state => state.userReducer.items)
  const pending = useSelector(state => state.userReducer.loading)
  const dispatch = useDispatch();
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
      selector: row => row.phoneNumber
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
        <Button onClick={() => handleEdit(column)}>Edit</Button>
        <Button onClick={() => handleDelete(column)}>Delete</Button>

      </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    }
  ]
  useEffect(() => {
    dispatch(userActions.getAll())
  }, [dispatch])

  function handleDelete(user) {
    const id = user._id;
    dispatch(userActions.delete(id))
  }
  const handleEdit = (user) => {
    setIsAddModal(false)
    handleOpenModal()
    setEditableUser(user)
  }
  const handleChange = ({ selectedRows }) => {
    setSelectedUsers(selectedRows);
  };
  const handleDeleteMany = () => {
    if (selectedUsers.length > 0) {
      selectedUsers.forEach((value) => {
        handleDelete(value)
      })
    } else {
      dispatch(alertActions.error("Chưa chọn user để xóa"))
    }
  }

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  const handleAdd= ()=>{ 
    setIsAddModal(true)
    setEditableUser();
    handleOpenModal()
  }
  return (
    <div>
      <Header />
      <div className="mt-5 mx-5">
        <Link to='/admin/users-manager/garbage'>Thùng rác của tôi</Link>
        <div className="text-right mb-5">
          <Button onClick={() => handleAdd()}>Add</Button>
          <Button onClick={() => handleDeleteMany()}>Delete</Button>
        </div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <DataTable

          title='User Store'
          columns={columns}
          data={users}
          theme="dark"
          selectableRows
          onSelectedRowsChange={handleChange}
          pagination
          progressPending={pending} />
      </div>
      {isAddModal &&
         <UserModal
         isAdd={isAddModal}
         isOpen={isOpenModal}
         toggle={handleOpenModal}
       ></UserModal>
      }
      {!isAddModal &&
         <UserModal
         isAdd={isAddModal}
         user={editableUser}
         isOpen={isOpenModal}
         toggle={handleOpenModal}
       ></UserModal>
      }
     
    </div>
  )
}

export default UsersManager 