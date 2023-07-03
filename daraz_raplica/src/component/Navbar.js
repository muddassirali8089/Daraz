import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';




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
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
           <Link to={'/'} id='my-nav_link'  className="navbar-brand"  href="#">
            Home
          </Link> 
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a  className="nav-link active " id='my-nav_link' href="#">
                save more on app <span className="sr-only">(current)</span>
              </a>
            </li>
            
            <li className="nav-item ">

            
              
              <a className="nav-link" id='my-nav_link' >
              DARAZ AFFILIATE PROGRAM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link "  id='my-nav_link' href="#">
              SELL ON DARAZ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id='my-nav_link' href="#">
              CUSTOMER CARE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id='my-nav_link' href="#">
              TRACK MY ORDER
              </a>
            </li>
            <li className="nav-item">
              <Link to={'/Signin'} className="nav-link " id='my-nav_link' href="#">
              LOGIN
              </Link>
            </li>
            < li className="nav-item">
              <Link to={'/Registration'} className="nav-link " id='my-nav_link' href="#">
              SIGNUP
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " id='my-nav_link' href="#">
              زبان تبدیل کریں
              </a>
            </li>
            </ul>

          {/* Uncomment the code below if you want to include a search form */}
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
