import Home from './pages/home'
import About from './pages/about'
import Feedback from './pages/feedback'
import Contact from './pages/contact'
import {  Route, Routes } from 'react-router-dom'
import Description from "./pages/description"
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import Detail from './pages/detail'
function App() {


  return (
    <>
      
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/description' element={<Description />}/>
        <Route path='/feedback' element={<Feedback />}/>
        <Route path='/detail' element={<Detail />} />
      </Routes>
      <Footer />

  
     
     
    
    </>
  )
}

export default App
