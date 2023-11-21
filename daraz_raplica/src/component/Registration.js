  import React from 'react';
  import { useFormik } from 'formik';
  import { registerUser } from '../Service/AddpersonApi';
  import { useState } from 'react';
  import { useNavigation } from 'react-router-dom';
  import {Button} from "react-bootstrap"
  import {response} from "../Service/AddpersonApi"

  import { RegistrationSchema } from '../Schamas/RegistrationSchema';
  import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
  } from 'mdb-react-ui-kit';
import { SoundTwoTone } from '@ant-design/icons';



  function Registration() {
    const today = new Date().toISOString().split('T')[0];

    const [registrationError, setRegistrationError] = useState(null); // State for error message
    const [registrationSuccess, setRegistrationSuccess] = useState(null); // State for success message
    const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthdate: '',
        gender: 'male',
      },
      validationSchema: RegistrationSchema,
      onSubmit: async (values, { resetForm }) => {
        setRegistrationSuccess(null);
        setRegistrationError(null);
        try {
          const response = await registerUser(values);
          console.log('API Response:', response.token);
          const {token , user} = response;
          console.log(token , "this is token... only");
          // Check if the response contains an error message
          if (response.message) {
            setRegistrationError(response.message);
            setRegistrationSuccess(null);
          } else {
            // Registration was successful
            setRegistrationError(''); // Clear any previous error message
            setRegistrationSuccess('Registration successful');
            // You can use response data here if needed
          }
  
          // Clear form fields upon successful registration
          resetForm();
        } catch (error) {
          console.error('Error registering:muddassir', error);
          setRegistrationError('Registration failed user aready exist');
          setRegistrationSuccess(null);
        }
      },
    });
  
    const isFormValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

    return (
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard
              className='bg-white my-5 mx-auto'
              style={{ borderRadius: '1rem', maxWidth: '500px' }}
            >
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className='fw-bold mb-1 text-center'>Sign up</h2>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3 w-100'>
                    <label htmlFor='full-name' className='custom-label'>
                      Full Name
                    </label>
                    <MDBInput
                      wrapperClass='w-100'
                      id='full-name'
                      type='text'
                      size='sm'
                      name='fullName'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    {touched.fullName && errors.fullName ? (
                      <p className='form-error'>{errors.fullName}</p>
                    ) : null}
                  </div>

                  <div className='mb-3 w-100'>
                    <label htmlFor='email' className='custom-label'>
                      Email
                    </label>
                    <MDBInput
                      wrapperClass='w-100'
                      size='sm'
                      id='email'
                      name='email'
                      type='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email ? (
                      <p className='form-error'>{errors.email}</p>
                    ) : null}
                  </div>

                  <div className='mb-3 w-100'>
                    <label htmlFor='password' className='custom-label'>
                      Password
                    </label>
                    <MDBInput
                      wrapperClass='w-100'
                      size='sm'
                      id='password'
                      name='password'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {touched.password && errors.password ? (
                      <p className='form-error'>{errors.password}</p>
                    ) : null}
                  </div>

                  <div className='mb-3 w-100'>
                    <label htmlFor='confirmPassword' className='custom-label'>
                      Confirm Password
                    </label>
                    <MDBInput
                      wrapperClass='w-100'
                      size='sm'
                      id='confirmPassword'
                      name='confirmPassword'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <p className='form-error'>{errors.confirmPassword}</p>
                    ) : null}
                  </div>

                  <div className='mb-3 w-100'>
                    <label htmlFor='birthdate' className='custom-label'>
                      Birthdate
                    </label>
                    <MDBInput
                      wrapperClass='w-100'
                      size='sm'
                      id='birthdate'
                      name='birthdate'
                      type='date'
                      max={today}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthdate}
                    />
                    {touched.birthdate && errors.birthdate ? (
                      <p className='form-error'>{errors.birthdate}</p>
                    ) : null}
                  </div>

                  <div className='mb-3 w-100'>
    {/* <label className='form-label'>Gender</label> */}
    <div className='form-check form-check-inline '>
      <input
        className='form-check-input'
        type='radio'
        name='gender'
        id='male'
        value='male'
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values.gender === 'male'}
      />
      <label className='form-check-label' htmlFor='male'>
        Male
      </label>
    </div>
    <div className='form-check form-check-inline'>
      <input
        className='form-check-input'
        type='radio'
        name='gender'
        id='female'
        value='female'
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values.gender === 'female'}
      />
      <label className='form-check-label' htmlFor='female'>
        Female
      </label>
    </div>
  
  </div>





  <div className='text-center'> 

  {registrationError ? (
        <p className='form-error'>{registrationError}</p>
      ) : registrationSuccess ? (
        <p>{registrationSuccess}</p>
      ) : null}

    <Button className='text-center' size='sm' type='submit' disabled={!isFormValid} >
      Sign up
    </Button>
  </div>

                </form>
                <div className='text-center mt-3'>
                  <p>
                    Not a member?{' '}
                    <a href='#!' className='text-decoration-none'>
                      Register
                    </a>
                  </p>
                  <p>or sign up with:</p>
                </div>
                <hr className='my-1' />
                <div
                  className='d-flex justify-content-between mx-auto'
                  style={{ width: '70%' }}
                >
                  <MDBBtn
                    tag='a'
                    color='none'
                    className='m-1'
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon='facebook-f' size='sm' />
                  </MDBBtn>
                  <MDBBtn
                    tag='a'
                    color='none'
                    className='m-1'
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon='twitter' size='sm' />
                  </MDBBtn>
                  <MDBBtn
                    tag='a'
                    color='none'
                    className='m-1'
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon='google' size='sm' />
                  </MDBBtn>
                  <MDBBtn
                    tag='a'
                    color='none'
                    className='m-1'
                    style={{ color: '#1266f1' }}
                  >
                    <MDBIcon fab icon='github' size='sm' />
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
