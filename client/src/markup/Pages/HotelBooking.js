import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import BookNowModal from './book-now-modal/BookNowModal';
import { roomActions } from 'actions';
import { useDispatch, useSelector } from 'react-redux';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
}

const images = importAll(require.context('images', true, /\.(png|jpe?g|svg)$/));

const bg3 = require('./../../images/banner/bnr1.jpg');
function HotelBooking(props) {
    const id = props.match.params.id;
    const room = useSelector(state => state.roomReducer.item)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(roomActions.getById(id))
    },[dispatch,id])
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const settings = {
        dots: false,
        slidesToShow: 1,
        infinite: true,
    };
    const {country,province,district,street} = room.address||{}
    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Hotal Booking</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>Hotal Booking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {room &&
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row m-b30">
                                <div className="col-lg-8">
                                    <div className="d-flex info-bx m-b30">
                                        <div className="tour-title">
                                            <h2>{room.name}</h2>
                                            {room.address && <p><i className="fa fa-map-marker m-r5"></i>{country}, {province}, {district}, {street}</p>}
                                            <p><span className="site-button button-sm button-gray">{room.category}</span> </p>
                                        </div>
                                        <div className="tour-price ml-auto">
                                            <span>Per Room Per Night</span>
                                            <h2 className="price">{room.price}</h2>
                                            {/* <h4 className="actual-price">4000000</h4> */}
                                        </div>
                                    </div>
                                    <div className="product-gallery on-show-slider">
                                        <Slider {...settings}>
                                            {room.images && room.images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="dlab-box">
                                                        <div className="dlab-thum-bx">
                                                            <img src={images[item]} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>
                                    <div className="tour-days">
                                        <h2 className="m-b10">About Hotel</h2>
                                        <p>{room.description}</p>
                                        <h2 className="m-b10">Hotel details</h2>
                                        <p>{room.shortDescription}</p>
                                        {/* <div className="row">
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <ul className="list-hand-point primary">
                                                    <li>Closeness to ISRO (1.6 km) and BEL (2.4 km)</li>
                                                    <li>Cozy rooms with modern interiors</li>
                                                    <li>In-house restaurant serving tasty dishes</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where we are Located</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The FabHotel RMS Comforts is situated on 5th Main in the Mathikere Extension area</li>
                                                    <li>Yeshwantpur Junction Railway Station is 1.8 km, while Krantivira Sangolli Rayanna Railway Station is 7.3 km from the hotel</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                    <li>Some of the prominent landmarks near the hotel include BBMP Office (700 m), Ramaiah Institute of Technology (750 m), Indian Institute of Science (950 m), BEL-THALES Systems Limited (1.5 km), ISRO (1.6 km), RTO Office Yeshwanthpura (1.8 km), Antrix Corporation Limited (1.9 km), Bharat Electronics Limited (2.1 km) and Professional Tax Office (2.5 km)</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where to Eat</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</li>
                                                    <li>Sri Krishna Bhavan (53 m), Shree Sagar (63 m), Delight (72 m), Reddy Mess (140 m), Star Biryani Center (290 m) and Indira Canteen (300 m) are among many dining options around the hotel</li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sticky-top">
                                        <form className="hotel-booking">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input name="dzName" required="" className="form-control" placeholder="" type="date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Rooms</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Adults</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="quantity btn-quantity">
                                                            <input className="form-control" id="demo_vertical2" type="text" name="demo_vertical2" />
                                                        </div>
                                                        <span className="font-12">Children</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-12 col-sm-6 col-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <select className="form-control">
                                                                <option>Deluxe Twin Bed Room</option>
                                                                <option>Breakfast and Dinner</option>
                                                                <option>Deluxe Twin (Smoking)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                    <div className="booking-total">
                                                        <h3 className="d-flex">{room.price} <span>Sub Total1 room for 1 night</span></h3>

                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                    <button type="button" className="site-button btn-block" onClick={() => handleOpenModal()}>Book Now</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="m-t30">
                                            <img src={require('./../../images/add/add-bnr.jpg')} className="d-md-none d-xl-block d-lg-block" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-b30">
                                <div className="col-md-12 col-lg-12">
                                    <div className="day-details-bx">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-4">
                                                <h4 className="m-b5">Utilities </h4>
                                                <div className="m-b10">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Wifi</li>
                                                            <li>Ti vi</li>
                                                           
                                                        </ul>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Bathroom</li>
                                                            <li>Study table</li>
                                                            <li>LCD TV</li>
                                                            <li>Study table</li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                         
                                            </div>
                                            <div className="col-md-7 col-lg-4">
                                                <div className="info-bx ">
                                                    <p>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</p>
                                                    <div className="tour-price">
                                                        <span>Per Room Per Night</span>
                                                        <h2 className="price">{room.price}</h2>
                                                        <h4 className="actual-price">400,000,000 VND</h4>
                                                    </div>
                                                    <div className="m-t20 m-b30">
                                                        <Link to='/remove' className="site-button red">Remove</Link>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-5 col-lg-4">
                                                <img src={images[room.image]} className="radius-sm" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade submit-query" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Get the Best Holiday Planned by Experts!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h5 className="text-center">Enter your contact details and we will plan the best holiday suiting all your requirements.</h5>
                                        <form className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="Your Name" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="Mobile No" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" placeholder="Your City" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="dzName" required="" className="form-control" type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="quantity btn-quantity">
                                                    <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                    <span className="font-12">Adult (12yrs +)</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="quantity btn-quantity">
                                                    <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                    <span className="font-12">Child (2-12yrs)</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="quantity btn-quantity">
                                                    <input id="demo_vertical2" type="text" name="demo_vertical2" />
                                                    <span className="font-12">Infant (0-2yrs)</span>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="modal-footer d-flex justify-content-between">
                                        <button type="submit" className="site-button-secondry" data-dismiss="modal">Close</button>
                                        <button type="submit" className="site-button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BookNowModal
                            isOpen={isOpenModal}
                            toggle={handleOpenModal}
                        />
                    </div>

                </div>
                }

            <Footer />
        </div>
    )
}
export default HotelBooking;