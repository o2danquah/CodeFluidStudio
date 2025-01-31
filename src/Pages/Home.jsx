import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useRef, useState } from "react";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import DesktopMacSharpIcon from '@mui/icons-material/DesktopMacSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import Footer from '../Components/Footer';
function Home() {
  
  
    // You can set the progress value (e.g., 80% progress)
    const [progress, setProgress] = useState(100);
    const [progress2, setProgress2] = useState(80)
  
    // Use refs to access the SVG elements
    const progressPathRef = useRef(null);
    const progressPathRef2 = useRef(null)
    const progressTextRef = useRef(null);
    const progressTextRef2 = useRef(null);
  
    // Effect to animate progress
    useEffect(() => {
     const circle2 = progressPathRef2.current
     const radius2 = circle2.r.baseVal.value
     const circumference2 = 2 * Math.PI * radius2
     const offset2 = circumference2 - (progress2/100) * circumference2
     circle2.style.transition = "stroke-dashoffset 60s ease-out";
     circle2.style.strokeDashoffset = offset2





     
      const circle = progressPathRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress / 100) * circumference;
  
      // Animate the stroke-dashoffset for the circular path
      circle.style.transition = "stroke-dashoffset 60s ease-out";
      circle.style.strokeDashoffset = offset;
  
      // Animate the text inside the circle
      let currentValue = 0;
      const textElement = progressTextRef.current;
      const interval = setInterval(() => {
        if (currentValue < progress) {
          currentValue++;
          textElement.textContent = `${currentValue}%`;
        } else {
          clearInterval(interval);
        }
      }, 20); // Speed of text increment
  
      const textElement2 = progressTextRef2.current
      let progressText = 0;
      const interval2 =setInterval(() => {
        if(progressText < progress2){
          progressText++
          textElement2.textContent = `${progressText}%`
        }
        else{
          clearInterval(interval2)
        }
      }, 20)
      // Cleanup the interval when the component unmounts or updates
      return () => clearInterval(interval, interval2);
    }, [progress,progress2]);
  


  return (
  <div>
    <section href="#about" id="about" className="about">
      
      <div className="container">
      
        <div className="row gy-1 justify-content-center">
          <div className="col-lg-6 text-center">
            <img src="/assets/img/Chart 3.png" className="img-fluid border-bottom-0" id="border-image" alt style={{paddingRight:"30px"}} />
          </div>
          <div className="col-lg-6 content">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                <h2>About Us</h2>
                </div>
              <div className="col-lg-12">
              <p st>
              At CodeFluid Studio, we empower your brand by enhancing your digital presence, helping you build trust with new clients while strengthening connections with your existing ones. Through innovative solutions, we create a bridge between you and a broader market, ensuring growth and lasting relationships. We pride ourselves on delivering exceptional results within agreed timelines, always striving for excellence in everything we do
              </p>
              </div>
              <div className='row'>
          <div className="col-lg-6 mt-1 text-center mr-3">
          <svg width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Circle Background (Gray) */}
            <circle cx="100" cy="100" r="80" stroke="#eee" strokeWidth="10" fill="none" />
    
            {/* Animated Circular Path (Progress) */}
            <circle
              ref={progressPathRef2}
              cx="100"
              cy="100"
              r="80"
              stroke="#FED049"
              strokeWidth="10"
              fill="none"
              strokeDasharray="565"
              strokeDashoffset="565"
            />
    
            {/* Text in the Center */}
            <text
              ref={progressTextRef2}
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="40px"
              fill="#404040"
            >
              0%
            </text>
          </svg>
          <h4>Clients Rentention</h4>
        </div>
    
       
    
        <div className="col-lg-6 mt-1 text-center ml-3">
          
        <svg width="200px" height="200px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Circle Background (Gray) */}
            <circle cx="100" cy="100" r="80" stroke="#eee" strokeWidth="10" fill="none" />
    
            {/* Animated Circular Path (Progress) */}
            <circle
              ref={progressPathRef}
              cx="100"
              cy="100"
              r="80"
              stroke="#FED049"
              strokeWidth="10"
              fill="none"
              strokeDasharray="565"
              strokeDashoffset="565"
            />
    
            {/* Text in the Center */}
            <text ref={progressTextRef} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="40px" fill="#404040"
            >
              0%
            </text>
          </svg>
          <h4>Completed Projects</h4>
        </div>
     
              </div>
              
    
            </div>
          </div>
        </div>
      </div>
    </section>

    <section href="#services" id='#Services' className='Services my-5 py-5'>
       <div className='container px-1' >
        <div className='row justify-content-center align-items-center' >
          
             <div className='text-center'>
              <h2>Services</h2>
              <p className='mx-2' style={{color:"#707070"}}>Elevate Your Brand, Deliver Excellence, Boost Your Presence – We help you stand out and thrive in the digital world with top-tier solutions that put your business in the spotlight.</p>
             </div>
             <div className='d-flex flex-lg-row flex-column  flex-column px-5'>
             <div id="card" className="card mb-3">
             <div style={{width:"100px", height:"100px", position:"relative"}}>
              <svg height={"100px"} width={"100px"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FED049" d="M69.3,-26.6C75.5,-3.3,56.5,24.1,34.4,37.9C12.3,51.7,-12.8,52,-31.1,39.5C-49.3,27,-60.6,1.8,-54.3,-21.6C-48,-45,-24,-66.6,3.8,-67.8C31.5,-69,63,-49.9,69.3,-26.6Z" transform="translate(100 100)" />
            </svg>
            <LanguageIcon style={{width:"40px", height:"40px", position:"absolute",top:"10", right:"10" }}/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Website & Web App</h5>
                <p className="card-text">We specialize in web and mobile app development to bring your ideas to life.</p>
               
              </div>
            </div>

            <div className="card mb-3">
              <div style={{width:"100px", height:"100px", position:"relative"}}>
              <svg height={"100px"} width={"100px"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FED049" d="M69.3,-26.6C75.5,-3.3,56.5,24.1,34.4,37.9C12.3,51.7,-12.8,52,-31.1,39.5C-49.3,27,-60.6,1.8,-54.3,-21.6C-48,-45,-24,-66.6,3.8,-67.8C31.5,-69,63,-49.9,69.3,-26.6Z" transform="translate(100 100)" />
            </svg>
            <AlternateEmailSharpIcon style={{width:"40px", height:"40px", position:"absolute", top:"10", right:"10"}}/>
              </div>
              <div className="card-body mb-3">
                <h5 className="card-title">Email Hosting</h5>
                <p className="card-text">
                An official email builds trust, enhances professionalism, and ensures secure communication for your business
                </p>
    
              </div>
            </div>

            <div className="card  mb-3">
            <div style={{width:"100px", height:"100px", position:"relative"}}>
            <svg height={"100px"} width={"100px"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FED049" d="M69.3,-26.6C75.5,-3.3,56.5,24.1,34.4,37.9C12.3,51.7,-12.8,52,-31.1,39.5C-49.3,27,-60.6,1.8,-54.3,-21.6C-48,-45,-24,-66.6,3.8,-67.8C31.5,-69,63,-49.9,69.3,-26.6Z" transform="translate(100 100)" />
            </svg>
            <DesktopMacSharpIcon style={{height:"40px",width:"40px", position:"absolute", top:"10", right:"10"}}/>
            </div>
              <div className="card-body">
                <h5 className="card-title">Management Systems</h5>
                <p className="card-text">We build management systems for Warehouses, stores, pharmacies etc to boost productivity and supervision</p>
    
              </div>
            </div>

            <div className="card mb-3">
            <div style={{width:"100px", height:"100px", position:"relative"}}>
              <svg height={"100px"} width={"100px"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FED049" d="M69.3,-26.6C75.5,-3.3,56.5,24.1,34.4,37.9C12.3,51.7,-12.8,52,-31.1,39.5C-49.3,27,-60.6,1.8,-54.3,-21.6C-48,-45,-24,-66.6,3.8,-67.8C31.5,-69,63,-49.9,69.3,-26.6Z" transform="translate(100 100)" />
            </svg>
            <SmsOutlinedIcon style={{width:"40px", height:"40px", position:"absolute", top:"10", right:"10"}}/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Bulk SMS</h5>
                <p className="card-text">Bulk SMS is perfect for promotions, customer notifications, event reminders, and marketing campaigns—delivering messages quickly and cost-effectively to a large audience</p>
              </div>
            </div>

             </div>
          </div>
        </div>

    </section>
    
  </div>



  )
}

export default Home