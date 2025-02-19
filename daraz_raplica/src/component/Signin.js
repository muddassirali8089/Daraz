import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Service/AuthuserApi";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function Signin() {
  const navigate = useNavigate();

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
    
        if (response) {
          localStorage.setItem('token', response.token);
          toast.success('Login successful!');
          navigate('/'); 
        }
      } catch (error) {
        console.error('Login error:', error);
        toast.error(error.message);
      }
    },
    
  });

  return (
    <MDBContainer fluid>
      <ToastContainer />
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '0.75rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-4 w-100 d-flex flex-column'>
              <h3 className="text-center">Sign in</h3>
              <p className="text-center">Please enter your email and password!</p>

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

                <Button className='text-center' size='sm' type='submit' >
                    Sign up
                  </Button>
                
              </form>

              <div className="text-center">
                <a href="#" className="text-decoration-none">Forgot Password?</a>
              </div>

              {/* Resend Verification Email Link */}
              <div className="text-center mt-1">
                <p>Did not verify your email? 
                  <a href="/resend-verification" className="text-decoration-none"> Resend Verification Email</a>
                </p>
              </div>

              <div className="text-center mt-1">
                <p>Not a member? <a href="/Registration" className="text-decoration-none">Register</a></p>
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
