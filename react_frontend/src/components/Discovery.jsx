import React from 'react'
import group from '../assets/group2.jpg'
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';



const Discovery = () => {
  return (
    <div className='px-12 mb-64 mb-[350px] md:mb-[200px] lg:mb-[130px]'>
              <div className='mt-20 relative'>
                <div className='w-full lg:w-[60%]'
                 data-aos='fade-right'
                 data-aos-offset='400'
                >
                     <img src={group} alt="" className='w-full'/>
                    
                </div>
                <div className='absolute md:top-[500px] lg:top-8  lg:right-20 p-7 space-y-6  lg:mt-16 bg-white lg:w-[40%] lg:h-[480px] '
                 data-aos='fade-left'
                 data-aos-offset='400'
                >
                    <p>WHY WE STARTED</p>
                    <h2 className='font-bold text-4xl'>It started out as a simple idea and evolved into our passion</h2>
                    <p className='text-sm text-stone-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro est id perspiciatis, aspernatur doloremque, ad sed, incidunt quis dolorum veniam! Eum ab omnis consequatur!</p>
                    <Link to='/about'>
                        <button
                            className='btn gap-x-6 px-6 text-sm lg:h-16 lg:text-base' >
                            Discover Our Story
                            <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
                        </button>
                    </Link>
        </div>
            </div>
    </div>
  )
}

export default Discovery
