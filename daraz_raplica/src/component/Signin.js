import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '0.75rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-4 w-100 d-flex flex-column'>
              <h3 className=" text-center">Sign in</h3>
              <p className=" text-center">Please enter your email and password!</p>
              <MDBInput wrapperClass='mb-0 w-100' label='Email address' id='formControlSm' type='email' size='sm' />
              <MDBInput wrapperClass='mb-0 w-100' label='Password' id='formControlSm' type='password' size='sm' />
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-1' label='Remember password' />
              <MDBBtn size='sm' className='mb-1'>
                Login
              </MDBBtn>
              <div className="text-center">
                <a href="#" className="text-decoration-none">Forgot Password?</a>
              </div>
              <div className="text-center mt-1">
                <p>Not a member? <Link to={"/Registration"} className="text-decoration-none">Register</Link></p>
                <p>or sign up with:</p>
              </div>
              <hr className="my-1" />
              <div className='d-flex justify-content-between mx-auto' style={{ width: '60%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ fontSize: '18px', color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="xl" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ fontSize: '18px', color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="xl" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ fontSize: '18px', color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="xl" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ fontSize: '18px', color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="xl" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signin;
