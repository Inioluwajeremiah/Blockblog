import React, { useState, useEffect} from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Dashboard from './Dashboard/Dashboard';
import ChangePassword from './pages/ChangePassword';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ResetPassword from './pages/ResetPassword';
import Home from './Routes/Home';
import AllPost from './Routes/AllPost';
import Ideals from './Routes/Ideals';
import About from './Routes/About';
import BlogPage from './Routes/BlogPage';
import ContactPage from './Routes/ContactPage';
import Header from './components/Header'
import Footer from './components/Footer'
import ForgotPassword from './Routes/ForgotPassword';
import NoPage from './Routes/NoPage';
import NavMobile from './components/NavMobile';

export default function App() {

    // mobile nav state
    const [navMobile, setNavMobile] = useState(false);
    // aos init
    useEffect(() => {
      Aos.init({
        duration: 2500,
        delay: 400,
      });
    });
  return (

    <BrowserRouter>
      <Header setNavMobile={setNavMobile} />
      
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/articles' element={ <AllPost />} />
      <Route path='/:title' element={ <Ideals />} />
      <Route path='/about' element={ <About />} />
      <Route path='/blog' element={ <BlogPage />} />
      <Route path='/contact' element={ <ContactPage />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/authenticate' element={<Login/>} />
      <Route path='/resetpassword' element={<ResetPassword/>} />
      <Route path='/changepassword' element={<ChangePassword/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}