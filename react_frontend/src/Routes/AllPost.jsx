import React, { useEffect } from 'react'
import Category from '../components/Cattegory'

import Footer from '../components/Footer'
import Header from '../components/Header'


// import aos
// import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroPost from '../components/HeroPost'
import Posts from '../components/Posts';
import JoinUs from '../components/JoinUs';

const AllPost = () => {

  return (
    <div>
        {/* <Header /> */}
        <HeroPost />
        <Posts />
        <Category />
        <JoinUs />
         {/* <Footer/> */}

    </div>
  )
}

export default AllPost
