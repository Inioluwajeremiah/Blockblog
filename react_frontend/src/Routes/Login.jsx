import React from 'react'
import FormButton from '../components/FormButton'
import FormMetaComponents from '../components/FormMetaComponents'
import InputComponent from '../components/InputComponent'
import TitleComponent from '../components/TitleComponent'
import FormHeader from '../components/FormHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
        {/* <Header/> */}
        <form action="/authenticate" encType='multipart/form-data' className='max-w-[500px] mx-auto my-4 shadow-lg p-4'>
            <FormHeader/>
            <TitleComponent title="Login" />
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
            <FormMetaComponents 
                leftText="New user? "
                rightText="Register here"
                authLink="/register" 
                forgotPassword = "Forgot password?"
                passwordLink="/forgotpassword"
                passwordLinkText="Retrieve here"
            />
            <FormButton/>
        </form>
    </div>
  )
}

export default Login;