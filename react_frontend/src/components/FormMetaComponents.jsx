import React from 'react'
import { Link } from 'react-router-dom'

const FormMetaComponents = ({rightText, leftText,authLink, passwordLink, passwordLinkText, forgotPassword }) => {
  return (
    <div className='p-2'>
        <div className='flex flex-row py-2 gap-2'>
            <p >{leftText}</p>
            <Link to={authLink} className="text-blue-500">{rightText}</Link>
            
        </div>
        <div className='flex flex-row py-2 gap-2'>
          <p>{forgotPassword} </p>
          <Link to={passwordLink} className="text-blue-500">{passwordLinkText}</Link>
        </div>
        
    </div>
  )
}

export default FormMetaComponents