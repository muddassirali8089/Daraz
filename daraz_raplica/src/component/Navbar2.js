import React from 'react';
import '../style/Navbar2.css';
import { Dropdown } from 'bootstrap';
import Catogry from './Catogry';
import 'tailwindcss/tailwind.css';


import { ShoppingCartOutlined } from '@ant-design/icons';

import AiOutlineSearch from "@ant-design/icons";

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



    <div className='navbar_2'>

      <div  className='container_fluid'> 
       <div className='row'>

<div className='col-sm-3 text-center' >
<a className="navbar-brand">
          <div>
             <img
              id="logo-image"
              
             src={require("../images/daraz_logo.png")}
             
              alt="Daraz Logo"
            />
          </div>
        </a>
   </div>

   <div className='col-sm-5 d-flex align-items-center justify-content-center' >
  <div className='input-group md-form form-sm form-2 pl-0 text-center '>
    <input

    
      className='form-control my-0 py-1 amber-border search_input '
      type='search'
     
      placeholder='Search in Daraz'
     
    
      aria-label='Search'
      required
    />
     <MDBBtn className='amber accent-4 custom-button'>
  <MDBIcon icon='search my_search ' className='text-white search_icon' />
</MDBBtn>



  </div>
</div>
<div className='col-sm-4 d-flex justify-content-center justify-content-sm-between align-items-center '>
  <ShoppingCartOutlined className='shoping_cart ' />
  <img
  
    id="logo-image2"
    src="https://icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png"
    alt=""
  />
</div>





       </div>


      </div>

    </div>


);
};

export default Navbar2;
//     <div className="navbar2 ">
//       <nav className="navbar navbar2 navbar-light bg-light justify-content-lg-between">
//         <a className="navbar-brand">
//           <div>
//             <img
//               id="logo-image"
//               src={require("../images/daraz_logo.png")}
//               className="img-fluid"
//               alt="Daraz Logo"
//             />
//           </div>
//         </a>

//          <form className="form-inline">

//           <input
//             style={{ width: "40vw" }}
//             className="form-control mr-sm-2 lzd-nav-cart search"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <MDBBtn rippleColor='dark'>
//         <MDBIcon icon='search' />
//       </MDBBtn>
//           {/* // <button
//           //   className="btn btn-outline-success my-2 my-sm-0 ml-auto search"
//           //   type="submit"
//           // >
//             Search
//           </button> */}
//         </form> 
        

//         <MDBNavbarLink href='#' className='navbar-link-custom'>
//   <MDBBadge pill color='light' className='cart-count' >10</MDBBadge>
//   <span>
//     <MDBIcon fas icon='shopping-cart' className='cart-icon'></MDBIcon>
//   </span>
// </MDBNavbarLink>



//         {/* <a className="navbar-brand">
//           <div>
//             <img
//               id="button_app"
//               src={require("../images/button_app.PNG")}
//               className="img-fluid"
//               alt="Daraz Logo"
//             />
//           </div>
//         </a> */}
//         <div className="user-picture">
//           <img
//             src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
//             className="rounded-circle user-picture-img"
//             height="30"
//             alt="User Picture"
//           />
//         </div>
//       </nav>

//       <Catogry />
//     </div>
 
