import { userActions } from 'actions';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Slick3 from './Slick3'

function Login2(props) {
    const [user, setUser] = useState({
        username: '',
        password: '',
        submitted: false
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...user, submitted: true });
        const { username, password } = user;
        if (username && password) {
            props.login(username, password);
        }
    }
    const { loggingIn, alert } = props;
    const { username, password, submitted } = user
    return (
        <div>
            <div className="page-content dlab-login font-roboto">
                <div className="container-fluid p-lr0">
                    <div className="row m-lr0 login-form-box">
                        <div className="col-lg-4 p-lr0">
                            <div className="login-form">
                                <div className="logo logo-header">
                                    <Link to={'./'}><img src={require('./../../images/logo-2.png')} alt="" /></Link>
                                </div>
                                <div id="login" className="tab-pane">
                                    <form className="dlab-form" onSubmit={handleSubmit} >
                                        <div className="form-head">
                                            <h3 className="form-title m-t0">We Are <span className="text-primary">Triper</span></h3>
                                            <p className="title-text">Welcome back, please login<br /> to your account</p>
                                        </div>

                                        <div className="form-group-bx">
                                            {alert.message &&
                                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                                            }
                                            <div className="form-group input-form">
                                                <label>Email Address</label>
                                                <input
                                                    name="username"
                                                    required=""
                                                    value={username}
                                                    onChange={handleChange}
                                                    className="form-control" placeholder="Type email" type="text" />

                                            </div>
                                            {submitted && !username &&
                                                <div className="alert-warning">Username is required</div>
                                            }
                                            <div className="form-group input-form">
                                                <label>Password</label>
                                                <input
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={password}
                                                    required=""
                                                    className="form-control "
                                                    placeholder="Type password" type="password" />
                                            </div>
                                            {submitted && !password &&
                                                <div className="alert-warning">Password is required</div>
                                            }
                                        </div>
                                        <div className="form-group field-btn text-left">
                                            <div className="input-block">
                                                <input id="check1" type="checkbox" />
                                                <label htmlFor="check1">Remember me</label>
                                            </div>
                                            <Link to={'./forgot'} className="btn-link forgot-password"> Forgot Password</Link>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                // onClick={}
                                                className="site-button black m-r10"  >login</button>
                                            <Link to={'./register'} className="site-button outline">Sign Up</Link>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8 p-lr0">
                            <Slick3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function mapState(state) {
    const { alert } = state;
    const { loggingIn } = state.authentication;
    return { loggingIn, alert };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};
const connectedLoginPage = connect(mapState, actionCreators)(Login2);
export { connectedLoginPage as Login2 }
