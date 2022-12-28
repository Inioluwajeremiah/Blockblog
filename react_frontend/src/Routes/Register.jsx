import React from 'react'
import FormButton from '../components/FormButton'
import FormMetaComponents from '../components/FormMetaComponents'
import TitleComponent from '../components/TitleComponent'
import InputComponent from '../components/InputComponent'
import FormHeader from '../components/FormHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div >
      {/* <Header/> */}
        <form action="/authenticate" encType='multipart/form-data' className='max-w-[500px] mx-auto my-4 shadow-lg p-4'>
          <FormHeader/>
          <TitleComponent title="Register" />
          <InputComponent
              id = "name"
              name="name"
              type="text"
              placeholder="Fullname"
          />
          <InputComponent
              id = "email"
              name="email"
              type="email"
              placeholder="Email"
          />
          <InputComponent
              id = "userName"
              name="userName"
              type="text"
              placeholder="Username"
          />
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
          <FormMetaComponents 
            leftText="Already registered? " 
            rightText="Login here"
            authLink="\authenticate"
          />
          <FormButton/>
        </form>
      {/* <Footer/> */}
  </div>
  )
}

export default Register