import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavMobile from '../components/NavMobile';
import Hero from '../components/Hero';
import FeaturedPost from '../components/FeaturedPost';
import AboutUs from '../components/AboutUs';
import Category from '../components/Cattegory';
import Discovery from '../components/Discovery';
import Author from '../components/Author';
import Testimonial from '../components/Testimonial';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {


    // mobile nav state
    const [navMobile, setNavMobile] = useState(false);
    // aos init
    useEffect(() => {
      Aos.init({
        duration: 2500,
        delay: 400,
      });
      window.addEventListener('load', Aos.refresh)
    });
  return (
    <div className=''>
            {/* <Header setNavMobile={setNavMobile} /> */}
      <Hero />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <FeaturedPost />
      <AboutUs />
      <Category />
      <Discovery />
      <Author />
     <Testimonial />
     <JoinUs />
     {/* <Footer /> */}
    </div>
  )
}

export default Home
