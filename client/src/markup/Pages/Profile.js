import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import { mailService, userService } from "../../services";
import { alertActions, userActions } from "../../actions";


const bg3 = require('./../../images/banner/bnr1.jpg');

function Profile(props) {
    const [isAgreeHost, setIsAgreeHost] = useState(false);

    const currentUser = useSelector(state => state.authentication.user)

    const user = useSelector(state => state.userReducer.item)
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch();

    const handleClickTobeHost = e => {
        setIsAgreeHost(!isAgreeHost)
    }

    useEffect(() => {
        dispatch(userActions.getById(currentUser.id))
    }, [dispatch, currentUser])
    const handleSubmitTobeHost = e => {
        mailService.sendMail({ to: user.email })
            .then(
                res => dispatch(alertActions.success(res.message))
            )
    }
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Profiles</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={''}>Home</Link></li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-head">
                <div className="container">
                    <div className="listing-info-box">
                        <div className="listing-theme-logo">
                            <img src={require('./../../images/gallery/img1.jpg')} alt="" />
                        </div>
                        <div className="listing-info">
                            <div className="listing-info-left">
                                <h3 className="title">{user.fullName}</h3>
                                {user.role === 'host' &&
                                    <p>You're Host, create some room to book here</p>
                                }
                            </div>
                            <div className="listing-info-right text-center">
                                <Link to={''} className="site-button red mr-3"><i className="la la-heart-o m-r5"></i>  Favorite </Link>
                                {user.role !== 'host' &&
                                    <Link className="site-button blue mr-3"
                                        onClick={() => { toggle('7'); }}><i className="la la-heart-o m-r5"></i>  To be Host </Link>
                                }
                                {user.role === 'host' &&
                                    <Link className="site-button blue mr-3"><i className="la la-heart-o m-r5"></i>  Manager Room </Link>
                                }
                                <div className="dropdown dropdown-btn">
                                    <button className="site-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="la la-share m-r5"></i>  Share
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-nav">
                <div className="container">
                    <ul className="listing-nav nav justify-content-center">

                        <li>
                            <Link className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}><i className="la la-list-alt"></i><span>My Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}><i className="la la-file-text"></i><span>To be Host</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="section-full listing-details-content">
                <div className="container">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="2">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title"> My Details</h3>
                                        </div>
                                        <div className="content-body blue">
                                            <p>If you want to find customer easily, to be my host</p>
                                            <p>If you want to find customer easily, to be my host</p>
                                            <div className="box-content">
                                                {alert.message &&
                                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                                }
                                                <div className="input-block">
                                                    <input id="rule" className="form-control" type="checkbox"
                                                        defaultChecked={isAgreeHost}
                                                        onClick={handleClickTobeHost} />
                                                    <label htmlFor="rule">I agree with your rules</label>
                                                </div>
                                                <button
                                                    className={isAgreeHost ? "site-button blue" : "site-button gray"}
                                                    onClick={handleSubmitTobeHost}
                                                    disabled={!isAgreeHost}>Get Host</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">To be Host</h3>
                                        </div>
                                        <div className="content-body blue">
                                            <p>If you want to find customer easily, to be my host</p>
                                            <p>If you want to find customer easily, to be my host</p>
                                            <div className="box-content">
                                                {alert.message &&
                                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                                }
                                                <div className="input-block">
                                                    <input id="rule" className="form-control" type="checkbox"
                                                        defaultChecked={isAgreeHost}
                                                        onClick={handleClickTobeHost} />
                                                    <label htmlFor="rule">I agree with your rules</label>
                                                </div>
                                                <button
                                                    className={isAgreeHost ? "site-button blue" : "site-button gray"}
                                                    onClick={handleSubmitTobeHost}
                                                    disabled={!isAgreeHost}>Get Host</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>

                    </TabContent>
                </div>
            </div>
        </div>
    );
}
export default Profile;