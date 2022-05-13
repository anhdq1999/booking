import React, { Component } from 'react';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/fontawesome/css/font-awesome.min.css'
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import { Router, Route, Switch } from 'react-router-dom';

import Homepage from './markup/Pages/Homepage';
import { Login2 } from './markup/Pages/Login2';
import {Register} from './markup/Pages/Register';
import Register2 from './markup/Pages/Register2';
import ForgotPass from './markup/Pages/ForgotPass';
import { history } from 'helpers';
import { alertActions } from 'actions';
import { connect } from 'react-redux';
import { UsersManager } from 'markup/Pages/admin/user-manager/UsersManager';
import { Garbage } from 'markup/Pages/admin/user-manager/Garbage';
import { GarbageRoom } from 'markup/Pages/admin/room-manager/GarbageRoom';
import {RoomsManager} from 'markup/Pages/admin/room-manager/RoomsManager'


class App extends Component {
  constructor(props) {
    super(props);
    
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    
    return (
     
      <div className="App">

      <Router history={history} basename="/" >
        <div className="page-wraper">
          <Switch>
            <Route path={['/','home']} exact component={Homepage} />
            <Route path='/login' exact component={Login2} />
            <Route path='/register' exact component={Register} />
            <Route path='/register2' exact component={Register2} />
            <Route path='/forgot' exact component={ForgotPass} />
            <Route path='/admin/users-manager' exact component={UsersManager}/>
            <Route path='/admin/users-manager/garbage' exact component={Garbage}/>
            <Route path= '/admin/rooms-manager' exact component={RoomsManager}/>
            <Route path= '/admin/room-manager/garbage' exact component={GarbageRoom} />
          </Switch>
        </div>
        
      </Router>
      </div>
    )
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
