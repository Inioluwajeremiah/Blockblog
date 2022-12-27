import React from 'react'
import FormButton from '../components/FormButton'
import FormMetaComponents from '../components/FormMetaComponents'
import InputComponent from '../components/InputComponent'
import TitleComponent from '../components/TitleComponent'
import FormHeader from '../components/FormHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'
const ForgotPassword = () => {
  return (
    <div>
        {/* <Header /> */}
        <form action="/authenticate" encType='multipart/form-data' className='max-w-[500px] mx-auto my-4 shadow-lg p-4'>
            <FormHeader/>
            <TitleComponent title="Forgot password?" />
            <InputComponent
                id = "email"
                name="email"
                type="email"
                placeholder="Email"
            />
            <InputComponent
                id = "newpassword"
                name="newpassword"
                type="password"
                placeholder="New password"
            />
            {/* <Footer /> */}
            <FormButton/>
        </form>
    </div>
  )
}

export default ForgotPassword;