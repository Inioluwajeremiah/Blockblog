import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const AboutUs = () => {
  return (
    <div className='mb-[300px] md:mb-[200px] lg:mb-16' >
        <div className='hidden md:flex pl-36'>
            <div className='h-2 w-[70%] bg-blue'></div>
            <div className='h-2 w-[30%] bg-black'></div>
        </div>
      <div className='bg-yellow-50   h-[400px] py-10'>
          <div className='px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
            <div className='space-y-4 p-8'
            data-aos='fade-right'
            data-aos-offset='400'
            >
                <p className='font-primary font-bold text-xl'>About Us</p>
                <h3 className='font-bold text-3xl'>We are community of content writers who share their learnings</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae necessitatibus dolorem possimus nobis quo ipsum placeat esse saepe doloribus?</p>


                
            </div>
            <div className='space-y-4 p-8'
             data-aos='fade-left'
             data-aos-offset='400'
             >
            <p className='font-primary font-bold text-xl'>Our Vision</p>
                <h3 className='font-bold text-3xl'>Creating Valuable contents for creatives all around the world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae necessitatibus dolorem possimus nobis quo ipsum placeat esse saepe doloribus?</p>
               
            </div>
            <div>

            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AboutUs
