import React from 'react'

import Image from '../assets/img4.jpg'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import { Link } from 'react-router-dom'

const HeroPost = () => {
  return (
    <div className='mb-16'>
              <section className='bg-yellow-50 t h-[70vh]  w-full lg:h-[90vh]'>
              
              <div className='w-full h-screen'>
  
              <div className='container mx-auto py-32 grid grid-cols-1 gap-y-10 lg:grid-cols-2'>
              
  
                  
                  <div className=''>
                  
                    {/* title */}
                    <h1
                      className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
                      data-aos='fade-right'
                      data-aos-delay='500'
                    >
                      Thoughts & ideas around the things matters.
                    </h1>
                    <p
                      className='max-w-[440px] leading-relaxed mb-8 '
                      data-aos='fade-down'
                      data-aos-delay='700'
                    >
                    In the long run of history, the censor and the inquisitor have always lost. The only sure weapon against bad ideas isbetter ideas.
                    </p>
                    <Link to='/ideas'>
                        <button
                          className='btn gap-x-6 px-6 text-sm lg:h-16 lg:text-base'
                          data-aos='fade-down'
                          data-aos-delay='800'
                        >
                          Read More
                          <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
                        </button>
                    </Link>
                  </div>
                  {/* hero image */}
                  <div className=''>
                      <img src={Image} alt='' className='h-full'
                       data-aos='fade-left'
                       data-aos-delay='800'
                      />
                  </div>
                
              </div>
                  </div>
                  
              
  
              </section>
    </div>
  )
}

export default HeroPost
