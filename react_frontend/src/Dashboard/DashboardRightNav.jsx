import React, { useContext } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import { RecentPostData } from './RecentPostData';
import { TrendingPostData } from './TrendingPostsData';
import { BlockBlogContext } from '../context/BlockBlogContext';
import  profilePics  from '../assets/images/avartar5.png';
import { Link } from 'react-router-dom';

const CustomCard = ({ profilePics, title, author, date, category }) => {
    return (
      <div className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
        <div className='w-[50px] h-[50px] rounded-full'>
          <img src={profilePics} alt="avatar profile" />
        </div>
        <div className='w-[100%]'>
          <p className='font-bold text-base '>{title}</p>
          <div className='flex justify-between text-sm '>
            <p className='p-2'>{author}</p>
            <p className='p-2'>{category}</p>
            <p className='p-2'>{date}</p>
          </div>
        </div>
      </div>
    )
}
const DashboardRightNav = () => {
  const {blockAccount, academyPosts, businessPosts, climatePosts, politicsPosts, technologyPosts } = useContext(BlockBlogContext)
  return (
    <div  className='lg:w-[35vw] w-[100%] mx-[auto]'>
       
       <section id='trendingposts' className='mx-4  mt-12 lg:mt-0'>
        <h2 className='flex text-text-color font-bold text-lg mt-8 justify-center lg:justify-start'>Recent Posts</h2>
        {
          academyPosts.slice(academyPosts.length - 2, academyPosts.length).map((item, index) => (
            <Link to="/article" 
              state={{
                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: academyPosts 
              }} key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
                  <div className='w-[50px] h-[50px] rounded-full'>
                    <img src={item.imageuri ? item.imageuri : profilePics} alt="avatar profile" />
                  </div>
                  <div className='w-[100%]'>
                    <p className='font-bold text-base '>{item.title}</p>
                    <div className='flex justify-between text-sm '>
                      <p className='p-2'>{item.author}</p>
                      <p className='p-2'>{item.cat}</p>
                      <p className='p-2'>{item.date}</p>
                    </div>
                  </div>
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
            }} key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
                <div className='w-[50px] h-[50px] rounded-full'>
                  <img src={item.imageuri ? item.imageuri : profilePics} alt="avatar profile" />
                </div>
                <div className='w-[100%]'>
                  <p className='font-bold text-base '>{item.title}</p>
                  <div className='flex justify-between text-sm '>
                    <p className='p-2'>{item.author}</p>
                    <p className='p-2'>{item.cat}</p>
                    <p className='p-2'>{item.date}</p>
                  </div>
                </div>
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
            }} key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
                <div className='w-[50px] h-[50px] rounded-full'>
                  <img src={item.imageuri ? item.imageuri : profilePics} alt="avatar profile" />
                </div>
                <div className='w-[100%]'>
                  <p className='font-bold text-base '>{item.title}</p>
                  <div className='flex justify-between text-sm '>
                    <p className='p-2'>{item.author}</p>
                    <p className='p-2'>{item.cat}</p>
                    <p className='p-2'>{item.date}</p>
                  </div>
                </div>
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
            }} key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
                <div className='w-[50px] h-[50px] rounded-full'>
                  <img src={item.imageuri ? item.imageuri : profilePics} alt="avatar profile" />
                </div>
                <div className='w-[100%]'>
                  <p className='font-bold text-base '>{item.title}</p>
                  <div className='flex justify-between text-sm '>
                    <p className='p-2'>{item.author}</p>
                    <p className='p-2'>{item.cat}</p>
                    <p className='p-2'>{item.date}</p>
                  </div>
                </div>
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
            }} key={index} className=' w-full flex smii:flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto] xsm:flex-col'>
                <div className='w-[50px] h-[50px] rounded-full'>
                  <img src={item.imageuri ? item.imageuri : profilePics} alt="avatar profile" />
                </div>
                <div className='w-[100%]'>
                  <p className='font-bold text-base '>{item.title}</p>
                  <div className='flex justify-between text-sm '>
                    <p className='p-2'>{item.author}</p>
                    <p className='p-2'>{item.cat}</p>
                    <p className='p-2'>{item.date}</p>
                  </div>
                </div>
          </Link>
          ))
        }
       </section>

       {/* <section id="recentposts" className='mx-4 mt-12 lg:mt-0'>
        <h2 className='text-text-color font-bold text-lg flex justify-center lg:justify-start'>Trending Posts</h2>
        {
          RecentPostData.map((item, index) => (
              <CustomCard key={index} 
                profilePics = {item.imageuri ? item.imageuri : profilePics}
                title = {item.title}
                author = {item.author}
                date = {item.date}
                category = {item.category}
              />
          ))
        }
       </section> */}
    </div>
  )
}

export default DashboardRightNav