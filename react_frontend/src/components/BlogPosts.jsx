import React, { useState } from 'react';

// import data
import { category } from '../data';

// import icons
import { IoIosArrowForward } from 'react-icons/io';

import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img5.jpg'

const BlogPosts = () => {
      // item name state
  const [itemName, setItemName] = useState('Bitcoin');
  return (
    <div className='px-12 mb-20 mt-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4'>
            <div className='grid grid-cols-1 items-start gap-y-10'>
                 <div className='space-y-2 flex items-center gap-x-6'>
                        <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                        </div>
                        <div className='relative top-11 md:top-0'>
                                <p className='text-gray-500'>
                                    STARTUP
                                </p>
                                    <h2 className='font-bold text-xl md:text-2xl'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                                </p>
                        </div>
                    </div>
                 <div className='space-y-2 flex items-center gap-x-6'>
                        <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                        </div>
                        <div className='relative top-11 md:top-0'>
                                <p className='text-gray-500'>
                                    STARTUP
                                </p>
                                    <h2 className='font-bold text-xl md:text-2xl'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                                </p>
                        </div>
                    </div>
                 <div className='space-y-2 flex items-center gap-x-6'>
                        <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                        </div>
                        <div className='relative top-11 md:top-0'>
                                <p className='text-gray-500'>
                                    STARTUP
                                </p>
                                    <h2 className='font-bold text-xl md:text-2xl'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                                </p>
                        </div>
                    </div>
                 <div className='space-y-2 flex items-center gap-x-6'>
                        <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                        </div>
                        <div className='relative top-11 md:top-0'>
                                <p className='text-gray-500'>
                                    STARTUP
                                </p>
                                    <h2 className='font-bold text-xl md:text-2xl'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                                </p>
                        </div>
                    </div>
                 <div className='space-y-2 flex items-center gap-x-6'>
                        <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                        </div>
                        <div className='relative top-11 md:top-0'>
                                <p className='text-gray-500'>
                                    STARTUP
                                </p>
                                    <h2 className='font-bold text-xl md:text-2xl'>
                                    Design tips for designers that cover everything you need
                                </h2>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                                </p>
                        </div>
                    </div>
            </div>

     
    <div className='mt-[100px] lg:mt-0'>
        <h2
          className='section-title text-center' >
          Category.
        </h2>
        {/* items */}
        <div
          className='flex flex-col gap-y-5 items-center' >
          {category.map((item, index) => {
            // destructure item
            const { image, name, description } = item;
            return (
              // item
              <div
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? 'bg-blue text-black' : 'bg-white border-2 border-gray-600'
                } w-full lg:w-[80%] h-32 rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}
              >
                <div className='flex justify-center items-center gap-x-4'>
                  {/* item image */}
                  <img className=' w-6' src={image} alt='' />
                  {/* item name */}
                 
                    <div className='text-[32px] font-bold'>{name}</div>
                  
                  
            
        
                </div>
              </div>
            );
          })}
        </div>
      </div>
    

 </div>

    </div>
  )
}

export default BlogPosts
