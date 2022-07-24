import { userActions } from "actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header(props) {

  useEffect(() => {
    const btn = document.querySelector(".navicon");
    const aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);
    const navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach(el => el.classList.remove("open"));
      current.classList.add("open");
    }
  }, []);
  const dispatch = useDispatch();
  const { user, loggedIn } = useSelector(state => state.authentication);

  function handleLogout() {
    dispatch(userActions.logout());
  }

  return (
    <header className="site-header mo-left header">
      <div className="top-bar bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="dlab-topbar-left">
              <ul>
                <li>
                  <Link to={"/hotel"} className="site-button-link"> Hotels </Link>
                </li>
                <li>
                  <Link className="site-button-link" to={"/place"}>Places</Link>
                </li>
                <li><Link className="site-button-link" to={"/packages"}>Packages</Link></li>
              </ul>
            </div>
            <div className="dlab-topbar-right top-login">
              {!loggedIn &&
                <ul>
                  <li><Link to={"/login"} className="site-button-link">Login</Link></li>
                  <li><Link to={"/register"} className="site-button-link">Register</Link></li>
                </ul>
              }
              {loggedIn &&
                <ul>
                  {user.role === "admin" &&
                    <li>
                      <Link to={"/admin/home"} className="site-button-link">Admin</Link>
                    </li>
                  }
                  {
                    user.role === "host" &&
                    <li>
                      <Link to={"/host/manager"} className="site-button-link">Manager</Link>
                    </li>

                  }
                  <li><Link to={"/profile"} className="site-button-link">{user.fullname}</Link></li>
                  <li><Link to={"/"} onClick={() => handleLogout()} className="site-button-link">Logout</Link></li>

                </ul>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header navbar-expand-lg">
        <div className="main-bar clearfix onepage">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link to={"./"}><img src={require("./../../images/logo.png")} alt="" /></Link>
            </div>
            <button className="navbar-toggler collapsed navicon justify-content-end" type="button"
              data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end"
              id="navbarNavDropdown">
              <ul className="nav navbar-nav">
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"/about"}> About Us </Link></li>
                <li><Link to={"/hotel"}>HoteL</Link></li>
                <li><Link to="/">Blog <i className="fa fa-chevron-down"></i></Link>
                  <ul className="sub-menu">
                    <li><Link to={"/blogleftsidebar"} className="dez-page">Left Image Sidebar</Link></li>
                    <li><Link to={"/blogdetails"} className="dez-page">Blog Details</Link></li>
                  </ul>
                </li>
                <li><Link to={"/contact"} className="dez-page">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;