import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter'



function Hero() {
   
const [mytext] = useTypewriter({
    words: ["a Professional Full Stack Web Developer", "a CyberSecurity Enthusiast"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 70
})
  return (
    <div>
  <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay={1500}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="hero-text col-lg-8 text-center">
        <h2>Turning your ideas into reality, powered by technology and driven by innovation</h2>  
        <a href="" className="btn-get-started">Contact Me</a> 
      </div>
      <div className="col-lg-6 text-center pt-5">
        
      </div>
         
      
    </div>
  </div>
</section>



    </div>
  )

}


export default Hero