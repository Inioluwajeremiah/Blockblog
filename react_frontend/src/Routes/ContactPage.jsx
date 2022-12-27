import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import WorkHours from '../components/WorkHours'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <ContactUs />
      <WorkHours />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  )
}

export default ContactPage
