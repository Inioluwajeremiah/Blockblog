import React from 'react'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
// import author from '../assets/author.jfif'
// import author2 from '../assets/author2.jfif'
// import author3 from '../assets/author3.jfif'
// import author4 from '../assets/author4.jfif'
// import author5 from '../assets/author.jfif'

import author from '../../public/images/Inioluwa.'
import author2 from '../../public/images/Victor.jpg'
import author3 from '../../public/images/Saaka.jpg'
import author4 from '../../public/images/Meshack.jpg'
import author5 from '../../public/images/Davidson.jpg'

const Author = () => {
  return (
    <div className='px-12 py-4 pt-48 lg:pt-24 space-y-6'>
      <h2 className='text-center font-bold font-primary text-2xl pb-6'
      data-aos='fade-down'
      data-aos-offset='500'
      >
        List of Authors
        </h2>

      <div className='space-y-10 lg:space-y-0 grid grid-cols-1 lg:grid-cols-5 gap-x-4'
      data-aos='fade-right'
      data-aos-offset='400'
      >

        {/* first author  */}
      <div className='bg-gray hover:bg-yellow-100 rounded-xl shadow-primary text-center py-5'>
        <div className='w-24 h-24 rounded-full mx-auto overflow-hidden bg-black'>
            <img src={author} alt="" className='w-full h-full object-cover'/>
        </div>
        <h2 className='font-bold font-primary text-xl'>Jeremiah Inioluwa</h2>
        <p className='mb-3 font-bold text-stone-600'>Solidity Developer</p>
        <div className='flex items-center justify-center gap-x-3'>
          <FaFacebookF className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaTwitter className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaInstagram className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
        </div>
      </div>

      {/* second author  */}

      <div className='bg-gray hover:bg-yellow-100 rounded-xl shadow-primary text-center py-5'>
        <div className='w-24 h-24 rounded-full mx-auto overflow-hidden bg-black'>
            <img src={author2} alt="" className='w-full h-full object-cover'/>
        </div>
        <h2 className='font-bold font-primary text-xl'>Victor Alishe</h2>
        <p className='mb-3 font-bold text-stone-600'>Solidity Developer</p>
        <div className='flex items-center justify-center gap-x-3'>
          <FaFacebookF className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaTwitter className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaInstagram className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
        </div>
      </div>
      {/* third author  */}

      <div className='bg-gray hover:bg-yellow-100 rounded-xl shadow-primary text-center py-5'>
        <div className='w-24 h-24 rounded-full mx-auto overflow-hidden bg-black'>
            <img src={author3} alt="" className='w-full h-full object-cover'/>
        </div>
        <h2 className='font-bold font-primary text-xl'>Saaka Ngotor</h2>
        <p className='mb-3 font-bold text-stone-600'>Solidity Developer</p>
        <div className='flex items-center justify-center gap-x-3'>
          <FaFacebookF className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaTwitter className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaInstagram className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
        </div>
      </div>
      {/* fourth author  */}

      <div className='bg-gray hover:bg-yellow-100 rounded-xl shadow-primary text-center py-5'>
        <div className='w-24 h-24 rounded-full mx-auto overflow-hidden bg-black'>
            <img src={author4} alt="" className='w-full h-full object-cover'/>
        </div>
        <h2 className='font-bold font-primary text-xl'>Meshack Esuabom</h2>
        <p className='mb-3 font-bold text-stone-600'>Solidity Developer</p>
        <div className='flex items-center justify-center gap-x-3'>
          <FaFacebookF className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaTwitter className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaInstagram className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
        </div>
      </div>
      {/* fifth author  */}

      <div className='bg-gray hover:bg-yellow-100 rounded-xl shadow-primary text-center py-5'>
        <div className='w-24 h-24 rounded-full mx-auto overflow-hidden bg-black'>
            <img src={author5} alt="" className='w-full h-full object-cover'/>
        </div>
        <h2 className='font-bold font-primary text-xl'>Davidson Idadakpoye</h2>
        <p className='mb-3 font-bold text-stone-600'>Solidity Developer</p>
        <div className='flex items-center justify-center gap-x-3'>
          <FaFacebookF className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaTwitter className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaInstagram className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
          <FaLinkedinIn className='hover:-translate-y-1 hover:text-yellow-900 hover:transition-all hover:duration-500 cursor-pointer'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Author
