import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Image1 from '../assets/img2.jpg'
import Image2 from '../assets/img3.jpg'
import Image3 from '../assets/img3.jpg'

const ReadPost = () => {
    const location = useLocation()
    
    const {no, id, author_name, img,  title, cat, subcat, content,authoradr, date, likes, allcat} = location.state;
    // const {a}
  return (
    <div className='px-12 mb-10'>
        <h2 className='font-bold text-xl py-4'>What to read next</h2>
        <div className='grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-3'>
        { 
            allcat.slice(no+1, no+4).map((item, index) =>
                <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: allcat 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-500 flex flex-row justify-between w-[100%]'>
                                <p className='p-2'>{item.date}</p>
                                <p className='p-2'>{item.subcat}</p>
                                
                            </div>
                    </div>
                    </Link>
        
                </div>
            )
        }
             {/* <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                    
                    <div className='w-[600px]  lg:w-fit'>
                            <img src={Image1} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
                        <p className='text-gray-500'>
                            STARTUP
                        </p>
                        <h2 className='font-bold text-xl md:text-2xl'>
                            Logo design trends to avoid in 2023
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                    </div>

            </div>
             <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                    <div className='w-[600px]  lg:w-fit'>
                            <img src={Image2} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
                        <p className='text-gray-500'>
                            STARTUP
                        </p>
                        <h2 className='font-bold text-xl md:text-2xl'>
                            Logo design trends to avoid in 2023
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                    </div>

            </div>
             <div className='space-y-2 flex items-center gap-x-6 lg:block'>
                    <div className='w-[600px]  lg:w-fit'>
                            <img src={Image3} alt="" className='w-full h-full' />
                    </div>
                    <div className='relative top-7 md:top-0'>
                        <p className='text-gray-500'>
                            STARTUP
                        </p>
                        <h2 className='font-bold text-xl md:text-2xl'>
                            Logo design trends to avoid in 2023
                        </h2>
                        <p className='text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                        </p>
                    </div>

            </div> */}
        </div>
    </div>
  )
}

export default ReadPost
