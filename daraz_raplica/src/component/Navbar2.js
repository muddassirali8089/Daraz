import React from 'react';
import '../style/Navbar2.css';
import { Dropdown } from 'bootstrap';
import Catogry from './Catogry';
import {
  MDBInputGroup,
  MDBInput, 
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';

const Navbar2 = () => {


  return (
    <div className="navbar2 ">
      <nav className="navbar navbar2 navbar-light bg-light justify-content-lg-between">
        <a className="navbar-brand">
          <div>
            <img
              id="logo-image"
              src={require("../images/daraz_logo.png")}
              className="img-fluid"
              alt="Daraz Logo"
            />
          </div>
        </a>

         <form className="form-inline">

          <input
            style={{ width: "40vw" }}
            className="form-control mr-sm-2 lzd-nav-cart search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
          {/* // <button
          //   className="btn btn-outline-success my-2 my-sm-0 ml-auto search"
          //   type="submit"
          // >
            Search
          </button> */}
        </form> 
        

        <MDBNavbarLink href='#' className='navbar-link-custom'>
  <MDBBadge pill color='light' className='cart-count' >10</MDBBadge>
  <span>
    <MDBIcon fas icon='shopping-cart' className='cart-icon'></MDBIcon>
  </span>
</MDBNavbarLink>



        {/* <a className="navbar-brand">
          <div>
            <img
              id="button_app"
              src={require("../images/button_app.PNG")}
              className="img-fluid"
              alt="Daraz Logo"
            />
          </div>
        </a> */}
        <div className="user-picture">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            className="rounded-circle user-picture-img"
            height="30"
            alt="User Picture"
          />
        </div>
      </nav>

      <Catogry />
    </div>
  );
};

export default Navbar2;
