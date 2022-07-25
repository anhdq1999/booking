
import Accommodation from 'markup/Pages/accommodation/Accommodation';
import BookingDetails from 'markup/Pages/accommodation/BookingDetails';
import Hotel from 'markup/Pages/accommodation/Hotel';
import HotelBooking from 'markup/Pages/accommodation/HotelBooking';
import BlogDetails from 'markup/Pages/blog/BlogDetails';
import BlogLeftSidebar from 'markup/Pages/blog/BlogLeftSidebar';
import Contacts from 'markup/Pages/Contacts';
import Error404 from 'markup/Pages/Error';
import ForgotPass from 'markup/Pages/forgot/ForgotPass';
import ResetPassword from 'markup/Pages/forgot/ResetPassword';
import Homepage from 'markup/Pages/Homepage';
import Login2 from 'markup/Pages/login/Login2';
import Order from 'markup/Pages/order/Order';
import Payment from 'markup/Pages/payment/Payment';
import Register from 'markup/Pages/register/Register-react-hook-form';
import RegisterVertified from 'markup/Pages/register/Register-vertifed';
import Register2 from 'markup/Pages/register/Register2';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function PublicRoutes() {




    return (



        <Switch>
            <Route path={['/', 'home']} exact component={Homepage} />
            <Route path='/login' exact component={Login2} />
            <Route path='/register' exact component={Register} />
            <Route path='/register2' exact component={Register2} />
            <Route path='/forgot' exact component={ForgotPass} />
            <Route path='/hotel' exact component={Hotel} />
            <Route path='/booking/:id' exact component={BookingDetails} />
            <Route path={['/accommodation/:province', '/accommodation']} exact component={Accommodation} />
            <Route path='/error' exact component={Error404} />
            <Route path='/forgot' exact component={ForgotPass} />
            <Route path='/hotelbooking/:id' exact component={HotelBooking} />
            <Route path='/blogleftsidebar' exact component={BlogLeftSidebar} />
            <Route path='/blogdetails' exact component={BlogDetails} />
            <Route path='/contact' exact component={Contacts} />
            <Route path='/register-verify/:e&:v' exact component={RegisterVertified} />
            <Route path='/reset-password/:id&:token' exact component={ResetPassword} />
            <Route path='/order' exact component={Order} />
            <Route path='/payment' exact component={Payment} />
        </Switch>
    )
}

export default PublicRoutes;