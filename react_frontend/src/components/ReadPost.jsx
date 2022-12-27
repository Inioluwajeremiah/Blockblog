import React from 'react'
import Image1 from '../assets/img2.jpg'
import Image2 from '../assets/img3.jpg'
import Image3 from '../assets/img3.jpg'

const ReadPost = () => {
  return (
    <div className='px-12 mb-10'>
        <h2 className='font-bold text-xl py-4'>What to read next</h2>
        <div className='grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-3'>
             <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                    <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
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
                            <img src={Image2} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
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
                            <img src={Image3} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
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
        </div>
    </div>
  )
}

export default ReadPost
