
import './App.css'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Home from './Pages/Home'

function App() {
 
  return (
    <div className='App'>
    <>
    <NavBar/>
    <Hero/>
    <Home/>
    <Projects/>
    <Footer/>
    </>
    
  </div>
  )
}

export default App
