import React from 'react'
import logo from '../../src/images/logo.png'

const FormHeader = () => {
  return (
    <div className='flex flex-row justify-around items-center border-b-[1px] border-[#ddd] py-2 mb-8'>
          <h1 className='text-text-color text-2xl font-bold'>BlockBlog</h1>
          <div className='h-20 w-20' >
              <img src={logo} alt="logo" />
          </div>
    </div>
  )
}

export default FormHeader;