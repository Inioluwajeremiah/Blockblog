import React from 'react'
import author from '../assets/author.jfif'
import startup from '../assets/st.png'
import Image from '../assets/img2.jpg'

const Thoughts = () => {
  return (
    <div className='px-12 py-16'>
        <div className='flex items-center gap-x-4 ml-56'>
            <div className='w-16 h-16 rounded-full  overflow-hidden bg-black'>
                <img src={author} alt="" className='w-full h-full object-cover'/>
            </div>
                <div className='self-end'>
                      <h3 className='font-bold text-xl'>Jonathan Valiem</h3>
                      <p className='font-semibold'>New York, USA</p>
                </div>
         </div>
            <div className='w-[800px] mx-auto mb-10'>
              
                    {/* title */}
                    <h1
                    className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
                    // data-aos='fade-right'
                    // data-aos-delay='500'
                    >
                    Thoughts & ideas around the things matters.
                    </h1>
                    <div className='flex items-center gap-x-3'>
                        <img src={startup} alt="" className='w-4'/>
                        <h2 className='font-bold'>Startup</h2>
                    </div>
            </div>
            <div className='h-[600px] w-full mb-6'>
                <img src={Image} alt="" className='h-full w-full'/>
            </div>
            <div>
                <h2 className='font-bold lg:text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis?
                </h2>
                <p className='text-gray-500 mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                </p>
                <h2 className='font-bold lg:text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis?
                </h2>
                <p className='text-gray-500 mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                </p>
                <h2 className='font-bold lg:text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis?
                </h2>
                <p className='text-gray-500 mb-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit autem fugiat sapiente amet placeat eum sed vitae labore, adipisci est quisquam suscipit ratione dolorem sequi, tempora nobis quasi illum velit, dicta iusto. Vitae aperiam, alias dolores necessitatibus tempora ratione cupiditate.
                </p>
            </div>
    </div>
  )
}

export default Thoughts
