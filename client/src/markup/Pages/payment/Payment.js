import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

const bg3 = require('images/banner/bnr1.jpg');

function Payment(props) {
    const item = useSelector(state => state.orderReducer.item)
    useEffect(() => {
        console.log(item);
    }, [item])
    return (
        <>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Payment</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Payment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">

                <div className="container">

                    <div className="border bg-light">
                        <div className="text-left m-5">
                            <button className="btn bg-primary"><i className="fa fa-arrow-left"></i></button>

                            <h5 className="mt-3 mb-3"> Enter this fill to completed ordering</h5>
                            <form >
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Full Name:</label>
                                    <div className="col-sm-6">
                                        <input className="form-control" placeholder="Phan Thành Đoan" type="text" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Phone:</label>
                                    <div className="col-sm-6">
                                        <input className="form-control" placeholder="0862083141" type="text" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email:</label>
                                    <div className="col-sm-6">
                                        <input className="form-control" placeholder="thanhdoan161222@gmail.com" type="text" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Room Name</label>
                                    <div className="col-sm-6">
                                        <input className="form-control" readOnly placeholder="Home stay của Doan" type="text" />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button className="btn bg-green mr-5">Pay Now</button>
                                    <PaypalCheckoutButton product={item} />
                                    <button className="btn bg-red">Ok with pay after</button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Payment;
