import Header from 'markup/Layout/Header'
import React, { useEffect } from 'react'
import Garbage from './user-manager/Garbage'
import UsersManager from './user-manager/UsersManager'
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { alertActions } from 'actions';
import { history } from 'helpers';

 function AdminRoute(props) {

  return (
    <div>
        <Header/>
        <Router history={history} basename="/admin" >
                <div className="page-wraper">
                    <Switch>
                        <Route path={['/','users-manager']} exact component={UsersManager} />
                        <Route path='/users-manager/garbage' exact component={Garbage} />
                    </Switch>
                </div>
                
            </Router>
    </div>
  )
}

export default AdminRoute