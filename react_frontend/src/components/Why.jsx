import React from 'react'

import Image1 from '../assets/group.jfif'
import Image2 from '../assets/group2.jpg'


const Why = () => {
  return (
    <div className='px-12'>
      <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-4'>
        <div 
         data-aos='fade-right'
         data-aos-offset='400'
        >
            <h2 className='font-bold text-2xl'>Our Team of Creatives</h2>
            <p className='font-bold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsa?</p>
            <p className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
            </p>
        </div>
        <div className='lg:w-[500px]'
         data-aos='fade-left'
         data-aos-offset='400'
        >
            <img src={Image1} alt="" className='w-full'/>
        </div>
        <div className='lg:w-[500px]'
         data-aos='fade-right'
         data-aos-offset='400'
        >
            <img src={Image2} alt="" className='w-full'/>
        </div>
        <div
         data-aos='fade-left'
         data-aos-offset='400'
        >
            <h2 className='font-bold text-2xl'>Our Team of Creatives</h2>
            <p className='font-bold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsa?</p>
            <p className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus nam quisquam repellat quidem sint impedit ullam deserunt minima error aperiam dicta nesciunt incidunt quia possimus laudantium, eligendi, nostrum tempora?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Why
