import React from 'react';

// import images
import Image from '../assets/img3.jpg';

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=' h-[70vh] relative w-full lg:h-[90vh]'>
        <div className='absolute left-0 top-0 w-full h-full bg-[#000000cc]
        leading-tight mb-6'
        // data-aos='fade-down'
        // data-aos-delay='500'
        ></div>
        
    <div className='w-full h-screen'>

      <div className='container mx-auto py-32'>
       
     
          {/* hero text */}
          <div className='lg:w-1/2 z-[1]'>
           
            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6 text-white'
              data-aos='fade-right'
              data-aos-delay='500'
            >
              Thoughts & ideas around the things matters.
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8 text-white'
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
          <img src={Image} alt='' className='w-full h-full z-[-1] absolute top-0 left-0'/>
        
      </div>
           </div>
          
       

    </section>
  );
};

export default Hero;
