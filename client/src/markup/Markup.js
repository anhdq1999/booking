import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import { Login2 } from './Pages/Login2';
import Register from './Pages/Register-react-hook-form';

import Register2 from './Pages/Register2';
import ForgotPass from './Pages/ForgotPass';
import { history } from 'helpers';
import { alertActions } from 'actions';
import { connect } from 'react-redux';


class Markup extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        return (
            <Router history={history} basename="/" >
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/login' exact component={Login2} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/register2' exact component={Register2} />
                        <Route path='/forgot' exact component={ForgotPass} />
                    </Switch>
                </div>
                /
            </Router>

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

const connectedMarkup = connect(mapState, actionCreators)(Markup);
export { connectedMarkup as Markup };