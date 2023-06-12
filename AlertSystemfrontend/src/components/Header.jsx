import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
    
  } from 'mdb-react-ui-kit'
  import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate =useNavigate();
  const [userInfo, setuserInfo] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [bool,setBool] =useState(false);


  const isUserLoggedIn=() =>{
    console.log("Check Login Status")
    let loggedIn=sessionStorage.getItem("userid") === null ? false : true;
    return loggedIn;
}
  useEffect(() => {
     isUserLoggedIn()?(setLoginStatus(sessionStorage.getItem("userid"))):setLoginStatus("");
  },[bool])


  
     const logout=()=>{
      
        sessionStorage.removeItem("userid");
        navigate("/login")
        setBool(true);
      
    }
  
    const [showBasic, setShowBasic] = useState(false);

 
    
    
  return (
    <div>
        <MDBNavbar expand='lg' light bgColor='light' className='fixed-top'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/'>Healthy Life</MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
            
            <MDBNavbarLink active aria-current='page' href='/home'>
              HOME
            </MDBNavbarLink>
          </MDBNavbarItem>
          
         {!isUserLoggedIn()?
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/login'>
              LOGIN 
            </MDBNavbarLink>
          </MDBNavbarItem>:
          <item>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href="/dashboard">

            {userInfo}
            </MDBNavbarLink>
          </MDBNavbarItem>
          </item>
         }
         {isUserLoggedIn()?
           <MDBNavbarItem>
           <MDBNavbarLink active aria-current='page' onClick={()=>logout()}>

           Logout
           </MDBNavbarLink>
         </MDBNavbarItem>:""
}
<MDBNavbarItem>
            
            <MDBNavbarLink active aria-current='page' href='/registration'>
                REGISTRATION
            </MDBNavbarLink>
          </MDBNavbarItem>
       
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
    </div>
  )
}

export default Header