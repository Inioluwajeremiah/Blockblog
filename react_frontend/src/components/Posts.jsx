import React from 'react'


// import Image4 from '../assets/img6.jpg'import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img5.jpg'

const Posts = () => {
  return (
    <div className='px-12 mt-96 mb-72 md:mt-[500px] py-20 lg:mt-0 py-0'>
        <h3 className='font-bold py-6 lg:text-center lg:py-16 lg:text-2xl'
          data-aos='fade-down'
          data-aos-delay='300'
        >All Posts
        </h3>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-4'
        data-aos='fade-right'
        data-aos-delay='500'
        >
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
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
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                <div className='w-[600px]  lg:w-fit'>
                    <img src={Image2} alt="" className='w-full h-full' />
                </div>
                <div className='relative top-11 md:top-0'>
                          <p className='text-gray-500'>
                                BUSINESS
                        </p>
                            <h2 className='font-bold text-xl md:text-2xl'>
                            How to build rapport with yor web design clients
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                </div>

            </div>
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                <div className='w-[600px]  lg:w-fit'>
                    <img src={Image3} alt="" className='w-full h-full' />
                </div>
                <div className='relative top-11 md:top-0'>
                          <p className='text-gray-500'>
                            STARTUP
                        </p>
                        <h2 className='font-bold text-xl md:text-2xl'>
                            Logo design trends to avoid in 2023
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                </div>

            </div>
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                <div className='w-[600px]  lg:w-fit'>
                    <img src={Image1} alt="" className='w-full h-full' />
                </div>
                <div className='relative top-11 md:top-0'>
                          <p className='text-gray-500'>
                                TECHNOLOGY
                        </p>
                            <h2 className='font-bold text-xl md:text-2xl'>
                            8 figma design systems you can download for free today
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                </div>

            </div>
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                <div className='w-[600px]  lg:w-fit'>
                    <img src={Image1} alt="" className='w-full h-full' />
                </div>
                <div className='relative top-11 md:top-0'>
                          <p className='text-gray-500'>
                            ECONOMY
                        </p>
                            <h2 className='font-bold text-xl md:text-2xl'>
                            Font sizes in UI design: The complete guide to follow 
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                </div>

            </div>
            <div className='space-y-2 flex items-center gap-x-6 lg:block'>
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
      
    </div>
  )
}

export default Posts
