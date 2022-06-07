import { roomActions } from 'actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { roomsService } from 'services';
import Footer from './../Layout/Footer';
import Header2 from './../Layout/Header2';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const images = importAll(require.context('images', true, /\.(png|jpe?g|svg)$/));
console.log(images);
const bg3 = require('images/banner/bnr1.jpg');

// const villa = require('images/homestay/pic15.jpg')

function Hotel(props) {
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.roomReducer.items)

    useEffect(() => {
       dispatch(roomActions.getAll())
    }, [dispatch])

    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Hotel</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>Hotel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white content-inner dlab-about-1">
                <div className="container">
                    <div className="section-head text-black text-center">
                        <h2 className="m-b0 text-uppercase">Popular hotel destinations</h2>
                        <p className="font-18">If you’re looking for a truly memorable family break, here you find the lowest price on the right hotel for you. It's indescribable.</p>
                    </div>
                    <div className="row">
                        {rooms && rooms.slice(0, 6).map((item, index) => (
                            <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={index}>
                                <div className="dlab-box hotal-box" data-tilt data-tilt-max="10" data-tilt-speed="1">
                                    <div className="dlab-media dlab-img-effect dlab-img-overlay2">
                                        {item.image && <img src={images[item.image]} alt="" />}
                                        <div className="dlab-info-has p-a20 text-white no-hover">
                                            <h4 className="m-t0 m-b10">{item.name}</h4>
                                            <span>{item.offer}</span>
                                            <h2 className="m-t10 m-b20">$ {item.price}</h2>
                                            <Link to={`./hotelbooking/${item._id}`} className="site-button outline outline-2 radius-xl">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        ))}

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
export default Hotel;