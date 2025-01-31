import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactsIcon from '@mui/icons-material/Contacts';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';



function NavBar ()  {
 
return (
<div>
        <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid d-flex align-items-center justify-content-between p-0">
    <a href="index.html" className="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      <img className='' src="CodeFluid_-removebg-preview.png" alt />

      
    </a>
    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="#hero">  <Tooltip TransitionComponent={Zoom} title="Home" color='blue' >
        <HomeIcon sx={{ fontSize: 40 }}/>
      </Tooltip></a></li>
      
        <li>
          <a href='#about'>
          <Tooltip TransitionComponent={Zoom} title="About">
        <InfoIcon sx={{ fontSize: 40 }}/>
      </Tooltip>
        </a>
        </li>
        <li><a href="#projects">
        <Tooltip TransitionComponent={Zoom} title="Projects">
        <EngineeringIcon sx={{ fontSize: 40 }}/>
      </Tooltip>
        </a></li>
        
        <li><a href="https://calendly.com/papa10058"><Tooltip TransitionComponent={Zoom} title="Contact Me">
        <ContactsIcon sx={{ fontSize: 40 }}/>
      </Tooltip></a></li>
      </ul>
    </nav>
    {/* <div className="header-social-links d-flex">
      <a href="https://twitter.com/02danquah" className="twitter"><i className="bi bi-x" /></a>
      <a href="https://www.instagram.com/02danquah" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="https://github.com/o2danquah" className="github"><i className="bi bi-github" /></a>
      <a href="https://www.linkedin.com/in/kwasi-otu-danquah-02danquah" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div> */}
    
  </div>
</header>

      </div>
    )
  }


export default NavBar