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
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { loginUser } from "../Service/AuthuserApi";
import { useFormik } from 'formik'; // Import useFormik

function Signin() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const userData = { email: values.email, password: values.password };
        const response = await loginUser(userData);
        // Handle successful login (e.g., redirect to dashboard)
      } catch (error) {
        // Handle login error (e.g., display error message)
        console.error('Login error:', error);
      }
    },
  });

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '0.75rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-4 w-100 d-flex flex-column'>
              <h3 className=" text-center">Sign in</h3>
              <p className=" text-center">Please enter your email and password!</p>

              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass='mb-0 w-100'
                  label='Email address'
                  id='email'
                  type='email'
                  size='sm'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}

                <MDBInput
                  wrapperClass='mb-0 w-100'
                  label='Password'
                  id='password'
                  type='password'
                  size='sm'
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-1' label='Remember password' />

                <MDBBtn type="submit" size='sm' className='mb-1'> {/* Change to type="submit" */}
                  Login
                </MDBBtn>
              </form>

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
