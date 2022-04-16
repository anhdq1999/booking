import { userActions } from 'actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Slider from "react-slick";
import { Link, Redirect } from 'react-router-dom';


class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        // same way this.setState({[e.target.name ]=e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn, alert } = this.props;
        const { username, password, submitted } = this.state
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
                                        <form className="dlab-form" onSubmit={this.handleSubmit} >
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
                                                        onChange={this.handleChange}
                                                        className="form-control" placeholder="Type email" type="text" />

                                                </div>
                                                {submitted && !username &&
                                                    <div className="alert-warning">Username is required</div>
                                                }
                                                <div className="form-group input-form">
                                                    <label>Password</label>
                                                    <input
                                                        name="password"
                                                        onChange={this.handleChange}
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
                                                    onClick={this.handleLogin}
                                                    className="site-button black m-r10"  >login</button>
                                                <Link to={'./register'} className="site-button outline">Sign Up</Link>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-8 p-lr0">
                                {/* <Slick3 /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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
// export default Login2;