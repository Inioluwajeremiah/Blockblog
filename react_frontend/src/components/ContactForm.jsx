import React from 'react'

const ContactForm = () => {
  return (
    <div className='px-12 py-10'>
      <div className=''>
        <form action="" className=' space-y-5'>
            <input type="text" placeholder='Your Name'  className='w-full border-2 border-gray-400 outline-none p-3 '/>
            <input type="email" placeholder='Your Email'  className='w-full border-2 border-gray-400 outline-none p-3'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message' className='w-full border-2 border-gray-400 outline-none p-3'></textarea>
            <button className='btn w-full font-bold flex justify-center'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
