import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <div className='bg-[#1D1D1D] flex justify-between items-center p-6'>
        <h2 className='text-2xl w-[500px] text-white font-bold lg:text-3xl'>Subscribe to our newsletter to get latest updates and news</h2>
        <div className=' w-1/2 flex items-center justify-between h-12 overflow-hidden'>
            <input type="text" placeholder='Enter your Email' className='w-full h-full bg-transparent outline-none border-2 text-white border-gray px-3'/>
            <button className='btn px-6'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
