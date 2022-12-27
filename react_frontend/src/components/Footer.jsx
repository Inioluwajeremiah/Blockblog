import React from 'react'
import Logo from '../assets/logo.png'
import Subscribe from './Subscribe'
import { Link } from 'react-router-dom';


// import icons
import {
    IoLogoYoutube,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoLinkedin,
  } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='bg-black px-12 py-5 relative'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-center'>
            <Link to='/'>
                <img src={Logo} alt="" className='w-32'/>
            </Link>
            <div className='pb-5 lg:pb-0'>
            <ul className='flex gap-x-5 text-gray'>
                <li>
                  <Link className='hover:text-blue transition' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-blue transition' to='/blog'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className='hover:text-blue transition' to='/about'>
                    About Us
                  </Link>
                </li>
          
                <li>
                  <Link className='hover:text-blue transition' to='/contact'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        <Subscribe />

         {/* social icons */}
        <div className= 'pt-6 flex justify-center lg:justify-end'>
            <div className='flex text-2xl gap-x-8'>
                    <a className='text-gray hover:text-blue transition' href='#'>
                    <IoLogoYoutube />
                    </a>
                    <a className='text-gray hover:text-blue transition' href='#'>
                    <IoLogoInstagram />
                    </a>
                    <a className='text-gray hover:text-blue transition' href='#'>
                    <IoLogoTwitter />
                    </a>
                    <a className='text-gray hover:text-blue transition' href='#'>
                    <IoLogoLinkedin />
                    </a>
            </div>
          </div>
    </footer>
   
  )
}

export default Footer
