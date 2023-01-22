import React from 'react';
import { Link } from 'react-router-dom';

// import data
import { navData } from './data';

// import icons
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-white h-full top-0 bottom-0 w-80 flex justify-center items-center'>
      {/* close btn */}
      <div
        onClick={() => setNavMobile(false)}
        className='absolute top-2 left-2 cursor-pointer'
      >
        <CgClose className='text-3xl' />
      </div>
      {/* menu list */}
      <ul className='text-xl flex flex-col gap-y-8'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
