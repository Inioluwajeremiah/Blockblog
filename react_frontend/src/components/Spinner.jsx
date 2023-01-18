import React from 'react'

const Spinner = () => {
  return (
    <div className=' w-2/3 h-1/3 max-h-[500px] items-center justify-center z-100 bg-yellow-500 flex flex-col rounded-lg mx-auto'>
    <div className='h-24 w-24 border-2 border-text rounded-full border-t-text-color animate-spin margin-auto'>
    </div>
  </div>  
  )
}

export default Spinner