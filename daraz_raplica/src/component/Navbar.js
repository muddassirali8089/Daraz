import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div className='my_navbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0 ">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse slide-up" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                to={'/'}
                className="nav-link"
                id='my-nav_link'
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                save more on app
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                DARAZ AFFILIATE PROGRAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                SELL ON DARAZ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                CUSTOMER CARE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                TRACK MY ORDER
              </a>
            </li>
            <li className="nav-item">
              <Link
                to={'/Signin'}
                className="nav-link"
                id='my-nav_link'
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/Registration'}
                className="nav-link"
                id='my-nav_link'
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                SIGNUP
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='my-nav_link'>
                زبان تبدیل کریں
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
