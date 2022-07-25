import { roomActions } from 'actions';
import { Image, Transformation } from 'cloudinary-react';
import React, { useEffect, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { roomsService } from 'services';

const bg3 = require('images/banner/bnr1.jpg');
function Accommodation(props) {

    const province = props.match.params.province;
    console.log(province);


    const roomsByProvince = useSelector(state => state.roomReducer.itemsByProvince)
    const rooms = useSelector(state => state.roomReducer.items)

    const dispatch = useDispatch();

    const pageLimit = 12;

    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    console.log(province);

    useEffect(() => {
        dispatch(roomActions.getAll())
    }, [dispatch])

    useEffect(() => {
        if (province) dispatch(roomActions.getByProvince(province))
        else dispatch(roomActions.getAll())
    }, [dispatch, province])

    useEffect(() => {
        setData(roomsByProvince);
    }, [roomsByProvince])

    useEffect(() => {
        if (rooms) setData(rooms)
    }, [rooms])

    useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, data]);


    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Accommodation</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Accommodation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">

                <div className="container">

                    <div className="row packages">
                        <div className="col-3">
                            <form className="for">
                                <h2>Categories</h2>
                                <ul>
                                    <li>
                                        <div className="input-block">
                                            <input id="homestay" type="checkbox" />
                                            <label htmlFor="homestay">Homestay</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="input-block">
                                            <input id="hotel" type="checkbox" />
                                            <label htmlFor="hotel">Hotel</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="input-block">
                                            <input id="resort" type="checkbox" />
                                            <label htmlFor="resort">Resort</label>
                                        </div>
                                    </li>
                                </ul>
                                <h2>Price</h2>
                                <ul>
                                    <li>
                                        <div className="input-block">
                                            <input id="increase" name="price" type="radio" />
                                            <label htmlFor="increase">Low to high</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="input-block">
                                            <input id="decrease" name="price" type="radio" />
                                            <label htmlFor="decrease">High to low</label>
                                        </div>
                                    </li>

                                </ul>

                            </form>
                        </div>
                        <div className="col-9 row">
                            {currentData && currentData.map((item, index) => (
                                <div className="col-md-6 col-xl-3  col-sm-6 m-b20" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link to={`/hotelbooking/${item._id}`}>
                                                <Image cloudName="dmtwoqysj" publicId={item.image} >
                                                    <Transformation width="400" height="250" gravity="south" crop="fill" />
                                                </Image>
                                            </Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link to={`/hotelbooking/${item._id}`}>{item.name}</Link></h4>
                                            <span className="location">{item.address.district}</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span className="fa fa-comment"></span> Reviews: {item.numReviews} </li>
                                                    <li> <span className="fa fa-star"></span> Star: {item.rating} </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span className="package-price pull-left text-primary">{roomsService.formatPrice(item.price)}</span>
                                                    <Link to={`/hotelbooking/${item._id}`} className="site-button pull-right w-100">View details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }

                        </div>

                    </div>
                    <div className="row justify-content-around">
                        <Paginator
                            totalRecords={data.length}
                            pageLimit={pageLimit}
                            pageNeighbours={2}
                            setOffset={setOffset}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Accommodation;