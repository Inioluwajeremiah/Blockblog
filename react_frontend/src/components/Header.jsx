import React from 'react';

// import components
import Logo from '../assets/images/logo.png';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

// import icons
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = ({ setNavMobile }) => {
  return (
    <header
      className='bg-black text-white py-2'
      // data-aos='fade-down'
      // data-aos-delay='900'
      // data-aos-duration='2000'
    >
      <div className='container mx-auto flex items-center justify-between'>

        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' className='w-[60px] h-[60px]'
                  // data-aos='fade-down'
                  // data-aos-delay='100'
                  // data-aos-duration='2000'
          />
        </Link>

        {/* nav & btns */}
        <div className='hidden lg:flex gap-x-[30px]'
          // data-aos='fade-down'
          // data-aos-delay='100'
          // data-aos-duration='2000'
          >
          <Nav />
          <AccountBtns />
        </div>

        {/* open nav btn */}
        <div
          onClick={() => setNavMobile(true)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-2xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
