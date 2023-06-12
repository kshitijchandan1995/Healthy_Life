import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
import UserServices from '../services/UserServices';

function Registration() {
    let [user ,setUser]= useState({username:"",firstName:"",lastName:"",password:"",age:''});
  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const navigate = useNavigate();
  const registerUser=(event)=>{
    event.preventDefault();
  
  
    console.log(user);
    console.log("inside register user")
    UserServices.registerUser(user).then(res=>{ 
      navigate('/login')
        console.log(res);       
    })
    
  }

  return (
    <div>
        <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>
        <MDBCol md='2'></MDBCol>
          <MDBCol md='4'>
            <MDBCardImage src='https://www.ns-healthcare.com/wp-content/uploads/sites/13/2021/07/shutterstock_1484579588-1.jpg' 
            alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>
          <MDBCol md='2'></MDBCol>
            
          <MDBCol md='4' >
          <h3>Registration Page</h3>  
            <form action='/' onSubmit={registerUser} method="POST">
            <MDBCardBody>
              <MDBInput wrapperClass='mb-4' label='Fisrt Name' id='first_name' type='text' onChange={handleChange} name="firstName" />
              <MDBInput wrapperClass='mb-4' label='Last Name' id='last_name' type='text' onChange={handleChange} name="lastName"/>
              <MDBInput wrapperClass='mb-4' label='User Name' id='user_name' type='text' onChange={handleChange} name="username"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handleChange} name="password"/>
                    <MDBInput type='number' min="65" label='select Age'  onChange={handleChange} name='age' ></MDBInput>
                <br></br>
              <MDBBtn type='submit' className="mb-4 w-100">Register</MDBBtn>

            </MDBCardBody>
          </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Registration