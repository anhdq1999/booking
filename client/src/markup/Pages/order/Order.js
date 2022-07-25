import { orderActions } from "actions";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { roomsService, userService } from "services";

const bg3 = require('images/banner/bnr1.jpg');

function Order(props) {
    const { register, setValue, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const user = userService.getCurrentUser()
    const bookNowItem = useSelector(state => state.orderReducer.bookNowItem)
    useEffect(() => {
        if (bookNowItem) {
            bookNowItem.dates.checkInDate = new Date(bookNowItem.dates.checkInDate).toLocaleDateString('en-CA')
            bookNowItem.dates.checkOutDate = new Date(bookNowItem.dates.checkOutDate).toLocaleDateString('en-CA')
            setValue("dates.checkInDate", bookNowItem.dates.checkInDate)
            setValue("dates.checkOutDate", bookNowItem.dates.checkOutDate)
        }
    }, [bookNowItem, setValue])
    if (!bookNowItem) return <Redirect to='/accommodation' />
    const onSubmit = (data) => {
        data.room = bookNowItem.room._id;
        data.user = user.id;
        dispatch(orderActions.initOrder(data))
    }

    return (
        <>
            {bookNowItem &&
                <>
                    <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Order</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link>Home</Link></li>
                                        <li>Order</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-full bg-white content-inner dlab-about-1 promotions">

                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-3 bg-info text-black">
                                        <div className="m-2">
                                            <div className="form-group">
                                                <label>Childs</label>
                                                <input className="form-control" defaultValue={bookNowItem.child} placeholder="3" {...register("child")} type="number" />
                                            </div>
                                            <div className="form-group">
                                                <label>Adults</label>
                                                <input className="form-control" defaultValue={bookNowItem.adults} placeholder="3" {...register("adults")} type="number" />
                                            </div>
                                            <div className="form-group">
                                                <label>Infants</label>
                                                <input className="form-control" defaultValue={bookNowItem.infants} placeholder="3" {...register("infants")} type="number" />
                                            </div>
                                            <div className="form-group">
                                                <label>Check in</label>
                                                <input className="form-control" placeholder="3" {...register("dates.checkInDate")} type="date" />
                                            </div>
                                            <div className="form-group">
                                                <label>Check out</label>
                                                <input className="form-control" placeholder="3" {...register("dates.checkOutDate")} type="date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-9 round border bg-light">
                                        <div className="text-left m-5">
                                            <button className="btn bg-primary"><i className="fa fa-arrow-left"></i></button>

                                            <h5 className="mt-3 mb-3"> Enter this fill to completed ordering</h5>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Full Name:</label>
                                                <div className="col-sm-6">
                                                    <input className="form-control" {...register("customerName")} placeholder="Enter your Full Name" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Phone:</label>
                                                <div className="col-sm-6">
                                                    <input className="form-control" {...register("customerPhone")} placeholder="Enter your number" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Email:</label>
                                                <div className="col-sm-6">
                                                    <input className="form-control" defaultValue={user.email} placeholder="Enter your email" type="text" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Room Name</label>
                                                <div className="col-sm-6">
                                                    <input className="form-control" readOnly defaultValue={bookNowItem.room.name} type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Total Price</label>
                                                <div className="col-sm-6">
                                                    <input className="form-control" readOnly {...register("toltalPrice")} defaultValue={roomsService.formatPrice(bookNowItem.room.price)} type="text" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn bg-green"> Create</button>
                                                <button className="btn bg-red"> Cancel</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </>
            }
        </>
    )

}

export default Order;