import React from 'react'

const InputComponent = ({title, type, name, id, placeholder, ...rest }) => {
  return (
    <div className='p-2'>
        <h3 className='text-text-color text-base mt-2 '>{title}</h3>
        <input name = {name} id = {id} className='text-text-color outline-none border-solid border-[1px] border-[#ddd] w-full px-[15px] py-2' type={type} placeholder={placeholder} {...rest}  />
    </div>
  )
}
export default InputComponent;