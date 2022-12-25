import React from 'react'
import FormHeader from '../components/FormHeader'
import TitleComponent from '../components/TitleComponent'
import InputComponent from '../components/InputComponent'
import FormButton from '../components/FormButton'

const ChangePassword = () => {
  return (
    <form action="/changepassword" encType='multipart/form-data' className='max-w-[500px] mx-auto my-4 shadow-lg p-4'>
        <FormHeader/>
        <TitleComponent title="Change password"/>
        <InputComponent
            id = "password"
            name="password"
            type="password"
            placeholder="Password"
        />
        <InputComponent
            id = "cpassword"
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
        />
        <FormButton/>
    </form>
  )
}

export default ChangePassword