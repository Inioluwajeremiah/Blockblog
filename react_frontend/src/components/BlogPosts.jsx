import React, { useState } from 'react';

// import data
import { category } from './data';

// import icons
import { IoIosArrowForward } from 'react-icons/io';

import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img5.jpg'
import { useContext } from 'react';
import { BlockBlogContext } from '../context/BlockBlogContext';
import { Link } from 'react-router-dom';

const PostCard = ({imageuri, category, title}) => {
    return (
        <div className='space-y-2 flex items-center gap-x-6'>
            <div className='w-[100%] h-[200px] lg:w-[100%]'>
                <img src={imageuri} alt="" className='w-full h-full' />
            </div>
            <div className='relative top-11 md:top-0'>
                    <p className='text-gray-500'>
                        {category}
                    </p>
                        <h2 className='font-bold text-xl md:text-2xl'>
                        {title}
                    </h2>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla sequi id commodi numquam iure voluptates iste!
                    </p>
            </div>
        </div>
    )
    }

const BlogPosts = (props) => {
      // item name state
  const [itemName, setItemName] = useState('Bitcoin');
  const {allPosts, academyPosts, businessPosts, climatePosts, politicsPosts, technologyPosts} = useContext(BlockBlogContext);

  return (
    <div className='px-12 mb-20 mt-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4'>
            <div className='grid grid-cols-1 items-start gap-y-10'>

                {/* latest post on academy  */}
                {
                    academyPosts.length > 0 ? 
                    academyPosts.slice(-1).map((item, index) => 
                    <Link to={`/${item.title}`}
                    state={{
                        no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                        title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                        authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: academyPosts 
                    }} key={index}
                    >
                        <div className='space-y-2 flex items-center gap-x-6'>
                           
                            <div className='w-[100%] h-[200px] lg:w-[100%]'>
                                <img src={item.imageuri} alt="" className='w-full h-full' />
                            </div>
                            <div className='relative top-11 md:top-0'>
                                    <p className='text-gray-500'>
                                        {item.cat}
                                    </p>
                                        <h2 className='font-bold text-xl md:text-2xl'>
                                        {item.title}
                                    </h2>
                                    <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                        <p>{item.subcat}</p>
                                        <p>{item.date}</p>   
                                    </div>
                            </div>
                            
                        </div>
                    </Link>
                    )
                   
                    // : <div><p>No Recent Articles</p></div>
                    : ""
                   
                }

                 {/* latest post on business  */}
                 {
                    businessPosts.length > 0 ? 
                    businessPosts.slice(-1).map((item, index) => 
                        // <PostCard key={index} 
                        //     title={item.title}
                        //     category= {item.cat}
                        //     imageuri={item.imageuri}
                        // />
                            <Link to={`/${item.title}`}
                                state={{
                                    no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                    title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                    authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: businessPosts 
                                }} key = {index}
                            >
                                 <div className='space-y-2 flex items-center gap-x-6'>
                                <div className='w-[100%] h-[200px] lg:w-[100%]'>
                                    <img src={item.imageuri} alt="" className='w-full h-full' />
                                </div>
                                <div className='relative top-11 md:top-0'>
                                        <p className='text-gray-500'>
                                            {item.cat}
                                        </p>
                                            <h2 className='font-bold text-xl md:text-2xl'>
                                            {item.title}
                                        </h2>
                                        <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                            <p>{item.subcat}</p>
                                            <p>{item.date}</p>   
                                        </div>
                                </div>
                           
                        </div>
                        </Link>
                    )
                    // : <div><p>No Recent Articles</p></div>
                    : ""
                }

                 {/* latest post on climate  */}
                 {
                    climatePosts.length > 0 ? 
                    climatePosts.slice(-1).map((item, index) => 
                        
                       
                            <Link to={`/${item.title}`}
                                state={{
                                    no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                    title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                    authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: climatePosts 
                                }} key={index}
                            >
                                 <div className='space-y-2 flex items-center gap-x-6'>
                                <div className='w-[100%] h-[200px] lg:w-[100%]'>
                                    <img src={item.imageuri} alt="" className='w-full h-full' />
                                </div>
                                <div className='relative top-11 md:top-0'>
                                        <p className='text-gray-500'>
                                            {item.cat}
                                        </p>
                                            <h2 className='font-bold text-xl md:text-2xl'>
                                            {item.title}
                                        </h2>
                                        <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                            <p>{item.subcat}</p>
                                            <p>{item.date}</p>   
                                        </div>
                                </div>
                           
                        </div>
                         </Link>
                    )
                    // : <div><p>No Recent Articles</p></div>
                    : ""
                }

                 {/* latest post on academy  */}
                 {
                    politicsPosts.length > 0 ? 
                    politicsPosts.slice(-1).map((item, index) => 
                        // <PostCard key={index} 
                        //     title={item.title}
                        //     category= {item.cat}
                        //     imageuri={item.imageuri}
                        // />
                            <Link to={`/${item.title}`}
                                state={{
                                    no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                    title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                    authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: politicsPosts
                                }} key={index}
                            >
                                 <div className='space-y-2 flex items-center gap-x-6'>
                                <div className='w-[100%] h-[200px] lg"w-[100%]'>
                                    <img src={item.imageuri} alt="" className='w-full h-full' />
                                </div>
                                <div className='relative top-11 md:top-0'>
                                        <p className='text-gray-500'>
                                            {item.cat}
                                        </p>
                                            <h2 className='font-bold text-xl md:text-2xl'>
                                            {item.title}
                                        </h2>
                                        <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                            <p>{item.subcat}</p>
                                            <p>{item.date}</p>   
                                        </div>
                                </div>
                            
                        </div>
                        </Link>
                    )
                    // : <div><p>No Recent Articles</p></div>
                    : ""
                }

                 {/* latest post on technology  */}
                 {
                    technologyPosts.length > 0 ? 
                    technologyPosts.slice(-1).map((item, index) => 
                        // <PostCard key={index} 
                        //     title={item.title}
                        //     category= {item.cat}
                        //     imageuri={item.imageuri}
                        // />
                       
                            <Link to={`/${item.title}`}
                                state={{
                                    no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                    title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                    authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: technologyPosts 
                                }} key={index}
                            >
                                 <div className='space-y-2 flex items-center gap-x-6'>
                                <div className='w-[100%] h-[200px] lg:w-[100%]'>
                                    <img src={item.imageuri} alt="" className='w-full h-full' />
                                </div>
                                <div className='relative top-11 md:top-0'>
                                        <p className='text-gray-500'>
                                            {item.cat}
                                        </p>
                                            <h2 className='font-bold text-xl md:text-2xl'>
                                            {item.title}
                                        </h2>
                                        <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                            <p>{item.subcat}</p>
                                            <p>{item.date}</p>   
                                        </div>
                                </div>
                        </div>
                        </Link>
                    )
                    // : <div><p>No Recent Articles</p></div>
                    : ""
                }
            </div>

                {/* category of items */}
            <div className='mt-[100px] lg:mt-0'>
                <h2 className='section-title text-center' >Category</h2>
                {/* items */}
                <div className='flex flex-col gap-y-5 items-center' >


                    {category.map((item, index) => {
                        // destructure item
                        const { image, name, description } = item;
                        return (
                        // item
                        // <Link to="/articles">
                            <Link to="/articles" state= {{
                                // pathname: "/articles" ,
                                category: name
                            }}
                            
                                onClick={() => setItemName(name)}
                                className={`${
                                name === itemName ? 'bg-blue text-black' : 'bg-white border-2 border-gray-600'
                                } w-full lg:w-[80%] h-32 rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                                key={index} >

                                <div className='flex justify-center items-center gap-x-4'>
                                    {/* item image */}
                                    <img className=' w-6' src={image} alt='' />
                                    {/* item name */}
                                    <div className='text-[32px] font-bold'>{name}</div>
                                </div>
                            {/* </div> */}
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPosts
