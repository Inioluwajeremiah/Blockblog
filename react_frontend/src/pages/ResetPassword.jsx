import React from 'react';
import FormHeader from '../components/FormHeader'
import TitleComponent from '../components/TitleComponent'
import InputComponent from '../components/InputComponent'
import FormButton from '../components/FormButton'

const ResetPassword = () => {
  return (
    <form action="/resetpassword" encType='multipart/form-data' className='max-w-[500px] mx-auto my-4 shadow-lg p-4'>
        <FormHeader/>
        <TitleComponent title="Reset password"/>
        <InputComponent
            id = "email"
            name="email"
            type="email"
            placeholder="Email"
        />
        <InputComponent
            id = "password"
            name="password"
            type="password"
            placeholder="Password"
        />
        <FormButton/>
    </form>
  )
}

export default ResetPassword;