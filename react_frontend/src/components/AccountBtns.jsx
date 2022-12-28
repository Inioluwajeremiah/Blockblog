import React from 'react';
import { Link } from 'react-router-dom';


const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      {/* link btn */}
      <Link to="/authenticate"  className='hover:border-app-color border-b-2 border-transparent transition'>Login</Link>
      
      {/* separator */}
      <span className='mx-6 text-white/20 font-thin'>|</span> 
       {/* register btn */}
      <button className='btn bg-white h-[52px] text-base px-8'> <Link to='/register'>Register</Link></button>
    </div>
  );
};

export default AccountBtns;
