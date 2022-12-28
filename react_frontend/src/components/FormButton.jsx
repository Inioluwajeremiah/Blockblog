import React from 'react'

const FormButton = ({title, onclick}) => {
  return (
    <div className='flex items-center flex-row justify-center mb-8'>
        <input type="submit" value="Submit" className='btn bg-app-color h-[52px] text-base px-8'/>
        {/*px-4 py-2 bg-app-color text-white rounded-sm cursor-pointer ease-in-out duration-5oo hover:tracking-widest'/> */}
    </div>
  )
}

export default FormButton;