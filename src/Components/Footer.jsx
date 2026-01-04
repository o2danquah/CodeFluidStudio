import React from 'react'

function Footer() {
  return (
    
<div className="container">
  <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    
    
    <a href="/" className="col-md-4 d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src='CodeFluid_-removebg-preview.png' className='img-fluid'/>
    </a>

    <div className='col-md-4 px-4'>
    <p className='m-0'>Email: <strong>codefluid@gmail.com</strong></p> 
    <p className='m-0'>Phone: <strong>+44 0744522871</strong></p> 
    </div>


    <ul className="nav col-md-4 justify-content-center pt-2">
      <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#about" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="#services" className="nav-link px-2 text-body-secondary">Services</a></li>
      <li className="nav-item"><a href="#projects" className="nav-link px-2 text-body-secondary">Projects</a></li>
      <li className="nav-item"><a href="https://calendly.com/papa10058" className="nav-link px-2 text-body-secondary">Contact Us</a></li>
    </ul>
  </footer>
</div>

  )
}

export default Footer