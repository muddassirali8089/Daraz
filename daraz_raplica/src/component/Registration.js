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
  // Import other components here
} from 'mdb-react-ui-kit';

function Registration() {
  const today = new Date().toISOString().split('T')[0]; // Get the current date

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign up</h2>

              <MDBInput wrapperClass='mb-4 w-100' label='Full Name' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Phone number' id='formControlLg' type='tel' size="lg" />

              <MDBInput wrapperClass='mb-4 w-100' label='Phone number verification' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Email address verification' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Birthdate' id='formControlLg' type='date' size="lg" max={today} />
              <div className="mb-4 w-100">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <MDBBtn size='lg'>Sign up</MDBBtn>

              <div className="text-center mt-3">
                <p>Not a member? <a href="#!" className="text-decoration-none">Register</a></p>
                <p>or sign up with:</p>
              </div>
              <hr className="my-1" />
              <div className='d-flex justify-content-between mx-auto' style={{ width: '70%' }}>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registration;
