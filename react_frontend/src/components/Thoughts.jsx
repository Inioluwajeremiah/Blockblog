import React from 'react'
import author from '../assets/author.jfif'
import startup from '../assets/st.png'
import Image from '../assets/img2.jpg'
import { useLocation } from 'react-router-dom'

const Thoughts = () => {
    const location = useLocation()
    
    const {no, id, author_name, img,  title, cat, subcat, content,authoradr, date, likes, allcats} = location.state;
  return (
    <div className='px-12 py-16'>
        <div className='flex items-center gap-x-4 ml-56'>
            <div className='w-16 h-16 rounded-full  overflow-hidden bg-black'>
                <img src={img} alt="" className='w-full h-full object-cover'/>
            </div>
                <div className='self-end'>
                      <h3 className='font-bold text-xl'>{author_name}</h3>
                      <p className='font-semibold'>{`${authoradr.slice(0,5)}...${authoradr.slice(authoradr.length-5, authoradr.length)}`}</p>
                </div>
         </div>
            <div className='w-[800px] mx-auto mb-10'>
              
                    {/* title */}
                    <h1
                    className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
                    // data-aos='fade-right'
                    // data-aos-delay='500'
                    >
                    {title}
                    </h1>
                    <div className='flex items-center gap-x-3'>
                        <img src={img} alt="" className='w-4'/>
                        <h2 className='font-bold'>{cat} </h2>
                    </div>
            </div>
            <div className='h-[600px] w-full mb-6'>
                <img src={img} alt="" className='h-full w-full'/>
            </div>
            <div dangerouslySetInnerHTML={{__html: content}}>
                
            </div>
    </div>
  )
}

export default Thoughts
