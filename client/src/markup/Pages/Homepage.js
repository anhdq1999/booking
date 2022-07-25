import { addressActions } from 'actions';
import React, { useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopPlaces from '../Element/TopPlaces/TopPlaces';
import Slick from 'markup/Pages/component-part/Slick';


const content = [
    {
        title: 'Đặt Homstay không khó nhờ có booking ',
        button: 'Book Now',
        image: require('images/main-slider/slide5.jpg'),
    },
    {
        image: require('images/main-slider/slide1.png'),
    },
    {
        title: '',
        button: 'Discover',
        image: require('images/main-slider/slide3.jpg'),
    },
    {
        title: '',
        button: 'Discover',
        image: require('images/main-slider/slide4.jpg'),
    }
];

const bg1 = require('images/background/bg1.jpg');
function Homepage(props) {
    const provinces = useSelector(state => state.addressReducer.provinces)
    const districts = useSelector(state => state.addressReducer.districts)
    const wards = useSelector(state => state.addressReducer.wards)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addressActions.getAllProvince())
    }, [dispatch])
    const handleProvinceChange = (e) => {
        const { value } = e.target;
        dispatch(addressActions.getAllDistrict(value))
    }
    const handleDistrictChange = (e) => {
        const { value } = e.target;
        dispatch(addressActions.getAllWard(value))
    }
    return (
        <div>
            <div className="page-content">
                <Slider className="slider-wrapper" infinite autoplay>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                        </div>
                    ))}
                </Slider>

                <div className="section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                    <div className="container">
                        <form className="row">
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Country</label>
                                <select className="form-control" readonly>
                                    <option>Việt Nam</option>
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Province</label>
                                <select className="form-control" onChange={handleProvinceChange}>
                                    {provinces.length > 0 &&
                                        <option checked>Chọn tỉnh</option>
                                    }
                                    {(provinces.length > 0 &&
                                        provinces.map((item, index) => (
                                            <option key={item._id} value={item.code}>{item.name_with_type}</option>
                                        ))) ||
                                        <option >Đang load dữ liệu</option>
                                    }
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>District</label>
                                <select className="form-control" onChange={handleDistrictChange}>
                                    {districts.length > 0 &&
                                        <option checked> Chọn Quận/huyện</option>
                                    }
                                    {(districts.length > 0 &&
                                        districts.map((item, index) => (
                                            <option key={item._id} value={item.code}>{item.name_with_type}</option>
                                        ))) ||
                                        <option>Vui lòng chọn tỉnh</option>}
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Ward</label>
                                <select className="form-control">
                                    {wards.length > 0 &&
                                        <option checked> Chọn Phường/Xã</option>
                                    }
                                    {(wards.length > 0 &&
                                        wards.map((item, index) => (
                                            <option value={item.code}>{item.name_with_type}</option>
                                        ))) ||
                                        <option>Vui lòng chọn huyện</option>
                                    }
                                </select>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Date</label>
                                <input type='text' className="form-control" id='datetimepicker4' />
                            </div>
                            <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                <label>Find</label>
                                <Link to={'/place'} className="site-button btn-block">SEARCH</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <TopPlaces />
                <Slick />
            </div>
        </div>
    )

}
export default Homepage;