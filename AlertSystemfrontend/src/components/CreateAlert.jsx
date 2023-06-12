import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  
  
}
from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
import AlertService from '../services/AlertService';

function CreateAlert() {
    let [alert, setAlert] = useState({ alertTime:"", desc: "",userid:''});
   const navigate = useNavigate();
    const createAlert=(event)=>{
        event.preventDefault();
        alert.alertTime= alert.alertTime +":00";

        const id=sessionStorage.getItem("userid")
        console.log(id);
         alert.userid = id
        
        AlertService.addAlert(alert).then(res=>{
            console.log(res);
            navigate('/home');
        })
        console.log(alert);
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setAlert({ ...alert, [name]: value })
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
          <h3>Alert Creation Page</h3>  
            <form action='' onSubmit={createAlert} method="">
            <MDBCardBody>
              <MDBInput wrapperClass='mb-4' label='Alert Time' id='alertTime' type='time' onChange={handleChange} name="alertTime" 
             />
              <MDBInput wrapperClass='mb-4' label='Description' id='desc' type='text' onChange={handleChange} name="desc"/>
              <MDBBtn type='submit' className="mb-4 w-100">Add Alert</MDBBtn>

            </MDBCardBody>
          </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default CreateAlert