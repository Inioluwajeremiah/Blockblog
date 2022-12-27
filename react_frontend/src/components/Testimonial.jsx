import React from 'react'
import author from '../assets/author.jfif'

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'


const Testimonial = () => {
  return (
    <div className='px-12 py-7 bg-yellow-50 mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-x-5'>
          <div className='space-y-4 lg:w-[300px]'>
              <p className='font-primary font-semibold'>TESTIMONIES</p>
              <div>
                <h2 className='font-bold text-2xl'>What People say About blockBlog</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse officia explicabo ea magni, expedita sit voluptate quis quidem eum sequi?</p>
              </div>
            </div>

            <div className='flex flex-col justify-between gap-y-7 border-l-2 border-gray-800 pl-6'>
              <div className='w-[600px]'>
                <p className='font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure iusto et laboriosam vero molestiae maiores dicta odit repellendus illum perspiciatis sed quasi fugiat  voluptates placeat ipsum autem accusantium nulla!
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                    <div className='w-16 h-16 rounded-full  overflow-hidden bg-black'>
                    <img src={author} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className='self-end'>
                      <h3 className='font-bold text-xl'>Jonathan Valiem</h3>
                      <p className='font-semibold'>New York, USA</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-16'>
                  <AiOutlineArrowLeft/>
                  <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center'>
                     <AiOutlineArrowRight className=''/>
                  </div>
                </div>
              </div>
            </div>
      </div>
   </div>
    
  )
}

export default Testimonial
