import React, { useContext } from 'react'

// imort icons 
import {FaGreaterThan} from 'react-icons/fa'
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import { Link } from 'react-router-dom';

// import images
import Image from '../assets/img2.jpg';
import { BlockBlogContext } from '../context/BlockBlogContext';

const FeaturedPost = ({authorsname, date, title}) => {

  const {academyPosts, businessPosts, climatePosts, politicsPosts, technologyPosts } = useContext(BlockBlogContext)

  const FeatureCard = () => {
    return (
      <div className=' p-3'>   <p className='text-sm text-stone-500 mb-1'>By {authorsname} <span className='border-l-2 border-stone-400 px-3'>{date}</span> </p>
        <h3 className='font-bold text-2xl'>{title}</h3>
      </div>
     
    )
    
  }

  let catArray = ['Academy', "Business", 'Climate' ,'Politics', 'Technology'];
  const randomCat = Math.floor(Math.random()* catArray.length);


  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:gap-x-16 lg:grid-cols-2'>

          {/* image and text */}
          <div
            className=' space-y-6 mb-12'
            data-aos='fade-down'
            data-aos-offset='600'
          >
            <h3 className='section-title'>Featured Post</h3>
            <img src={Image} alt='' className=''/>
            <p className='text-sm text-stone-500'>By Jeremiah Inioluwa <span className='border-l-2 border-stone-400 px-3'>Dec 1, 2022</span> </p>

            <h2 className='section-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, velit?</h2>

            <button className='btn gap-x-6 px-6 text-sm lg:h-16 lg:text-base'>
              Learn more
              <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />

            </button>

          </div>

          {/* text */}
          <div
            className=' lg:max-w-[480px]'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <div className='flex items-center justify-between mb-7'>
                <h2 className=' text-2xl lg:text-[26px] font-bold leading-none'>All Post</h2>

                <p className='border-stone-400 cursor-pointer'>
                  <Link to='/articles' state ={{category: catArray[randomCat]}}>
                     view all
                  </Link>
                </p>
            </div>

          {/* Post  */}
        <div className='space-y-10'>
          {
          academyPosts.slice(academyPosts.length - 2, academyPosts.length).map((item, index) => (
              <Link to="/article" 
                state={{
                  no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                  title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                  authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: academyPosts 
                }} key={index} className='bg-gray p-3' >
                    <p className='text-sm text-stone-500 mb-1'>By {item.author} <span className='border-l-2 border-stone-400 px-3'>{item.date}</span> </p>
                    <h3 className='font-bold text-2xl'>{item.title}</h3>
              </Link>   
          ))
        }

        {
          businessPosts.slice(businessPosts.length-2, businessPosts.length).map((item, index) => (
            <Link to="/article" 
            state={{
              no: index, id: item.id, author_name: item.author, img: item.imageuri, 
              title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
              authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: businessPosts 
            }} key={index} className='bg-gray p-3' >
                <p className='text-sm text-stone-500 mb-1'>By {item.author} <span className='border-l-2 border-stone-400 px-3'>{item.date}</span> </p>
                <h3 className='font-bold text-2xl'>{item.title}</h3>
          </Link>
          ))
        }
        {
          climatePosts.slice(climatePosts.length - 2, climatePosts.length).map((item, index) => (
            <Link to="/article" 
              state={{
                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: climatePosts 
              }} key={index} className='bg-gray p-3' >
                  <p className='text-sm text-stone-500 mb-1'>By {item.author} <span className='border-l-2 border-stone-400 px-3'>{item.date}</span> </p>
                  <h3 className='font-bold text-2xl'>{item.title}</h3>
            </Link>
          ))
        }
        {
          politicsPosts.slice(politicsPosts.length -2, politicsPosts.length).map((item, index) => (
            <Link to="/article" 
              state={{
                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: politicsPosts 
              }} key={index} className='bg-gray p-3' >
                  <p className='text-sm text-stone-500 mb-1'>By {item.author} <span className='border-l-2 border-stone-400 px-3'>{item.date}</span> </p>
                  <h3 className='font-bold text-2xl'>{item.title}</h3>
            </Link>
          ))
        }
        {
          technologyPosts.slice(technologyPosts.length -2, technologyPosts.length).map((item, index) => (
            <Link to="/article" 
              state={{
                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: technologyPosts 
              }} key={index} className='bg-gray p-3' >
                  <p className='text-sm text-stone-500 mb-1'>By {item.author} <span className='border-l-2 border-stone-400 px-3'>{item.date}</span> </p>
                  <h3 className='font-bold text-2xl'>{item.title}</h3>
            </Link>
          ))
        }
      </div>
            {/* <div className='space-y-10'> */}
                {/* <div className=' p-3'>
                  <p className='text-sm text-stone-500 mb-1'>By Jeremiah Inioluwa <span className='border-l-2 border-stone-400 px-3'>Dec 1, 2022</span> </p>
                   <h3 className='font-bold text-2xl'>Building a decentralized application from scratch with reactjs, tailwindcss, nextjs, solidity free</h3>
                </div>

                <div className='bg-gray p-3'>
                  <p className='text-sm text-stone-500 mb-1'>By Jeremiah Inioluwa <span className='border-l-2 border-stone-400 px-3'>Dec 1, 2022</span> </p>
              
                <h3 className='font-bold text-2xl'>Building a decentralized application from scratch with reactjs, tailwindcss, nextjs, solidity free</h3>
                </div>

                <div className=' p-3'>
                  <p className='text-sm text-stone-500 mb-1'>By Jeremiah Inioluwa <span className='border-l-2 border-stone-400 px-3'>Dec 1, 2022</span> </p>
                
                <h3 className='font-bold text-2xl'>Building a decentralized application from scratch with reactjs, tailwindcss, nextjs, solidity free</h3>
                </div>

                <div className='bg-gray p-3'>
                  <p className='text-sm text-stone-500 mb-1'>By Jeremiah Inioluwa<span className='border-l-2 border-stone-400 px-3'>Dec 1, 2022</span> </p>
                
                <h3 className='font-bold text-2xl'>Building a decentralized application from scratch with reactjs, tailwindcss, nextjs, solidity free</h3>
                </div> */}
            {/* </div> */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
