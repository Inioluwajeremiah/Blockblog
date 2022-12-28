import React from 'react';

const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      {/* link btn */}
      <a className='hover:border-app-color border-b-2 border-transparent transition' href='/authenticate'>
        Login
      </a>
      {/* separator */}
      <span className='mx-6 text-white/20 font-thin'>|</span> 
       {/* register btn */}
      <button className='btn bg-white h-[52px] text-base px-8'> <a href="/register">Register</a></button>
    </div>
  );
};

export default AccountBtns;
