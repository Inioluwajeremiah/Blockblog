import React from 'react'
import Image from '../assets/teams.jfif'

const About = () => {
  return (
    <div className='px-12 py-10 mt-10 '>
      <div className='mx-auto' >
          <div className='lg:w-[600px] p-5 shadow-primary bg-white relative top-10 lg:left-32'>
            <p className='text-gray-600'>About Us</p>
            <h2 className='font-bold text-2xl lg:text-3xl'>We are a team of Solidity Develoopers who share their learnings</h2>
          </div>
          <div className='lg:h-[500px]'>
            <img src={Image} alt="" className='w-full h-full'/>
          </div>
          <div >
            <div className='flex items-center justify-between bg-yellow-500 lg:w-1/2 p-7 relative -top-28 lg:left-40'>
              <div className='bg-blue-900 w-72 h-4 absolute bottom-0 left-0'></div>
              <div>
                <h2 className='font-bold text-3xl'>12+</h2>
                <p>Blogs Published</p>
              </div>
              <div>
                <h2 className='font-bold text-3xl'>18+</h2>
                <p>Views on Finsweet</p>
              </div>
              <div>
                <h2 className='font-bold text-3xl'>30+</h2>
                <p>Total active Users</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
