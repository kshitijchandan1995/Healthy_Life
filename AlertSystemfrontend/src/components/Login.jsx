import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
import SessionStorage from '../services/SessionStorage';
import UserServices from '../services/UserServices';
function Login() {
  let [userCred, setUserCred] = useState({ username: "", password: "" });
  const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();
    
    const handleChange = (event) => {
      const { name, value } = event.target
      setUserCred({ ...userCred, [name]: value })
  }

  const validateUser = (event) => {
    event.preventDefault();
    console.log(userCred);
    console.log("in validate")
    UserServices.UserSignin(userCred).then(res=>{
        console.log(res.data.userID);
        SessionStorage.StoreUser(res.data.userID)
        navigate("/home")
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
            alt='phone' className='rounded-t-5 rounded-tr-lg-0 loginimage' fluid />
          </MDBCol>
          <MDBCol md='2'></MDBCol>  
          <MDBCol md='4' >
          <h3>Login Page</h3> 
            <form action='' onSubmit={validateUser} method="POST">
            <MDBCardBody>
            {loginStatus === "wrong credentials" && <p>Incorrect username or password</p>}
              <MDBInput wrapperClass='mb-4' label='UserName' id='user_name' name='username' type='text' onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='password' name='password' type='password' onChange={handleChange}/>
                

              <MDBBtn type='submit' className="mb-4 w-100">Sign in</MDBBtn>

            </MDBCardBody>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    
    </div>

  );
    
  }
export default Login;