import React from 'react'

const FormMetaComponents = ({rightText, leftText,authLink, passwordLink, passwordLinkText, forgotPassword }) => {
  return (
    <div className='p-2'>
        <div className='flex flex-row py-2 gap-2'>
            <p >{leftText}</p>
            <a href={authLink} className="text-blue-500">{rightText}</a>
            
        </div>
        <div className='flex flex-row py-2 gap-2'>
          <p>{forgotPassword} </p>
          <a href={passwordLink} className="text-blue-500">{passwordLinkText}</a>
        </div>
        
    </div>
  )
}

export default FormMetaComponents