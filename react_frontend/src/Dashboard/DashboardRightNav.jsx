import React, { useContext } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import { RecentPostData } from './RecentPostData';
import { TrendingPostData } from './TrendingPostsData';
import { BlockBlogContext } from '../context/BlockBlogContext';
import  profilePics  from '../assets/images/avartar5.png';

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
          academyPosts.slice(-1).map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {new Date(dataItems.date).toLocaleDateString()}
                category = {dataItems.cat}
              />
          ))
        }

        {
          businessPosts.slice(-1).map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {new Date(dataItems.date).toLocaleDateString()}
                category = {dataItems.cat}
              />
          ))
        }
        {
          climatePosts.slice(-1).map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {new Date(dataItems.date).toLocaleDateString()}
                category = {dataItems.cat}
              />
          ))
        }
        {
          politicsPosts.slice(-1).map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {new Date(dataItems.date).toLocaleDateString()}
                category = {dataItems.cat}
              />
          ))
        }
        {
          technologyPosts.slice(-1).map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {new Date(dataItems.date).toLocaleDateString()}
                category = {dataItems.cat}
              />
          ))
        }
       </section>

       <section id="recentposts" className='mx-4 mt-12 lg:mt-0'>
        <h2 className='text-text-color font-bold text-lg flex justify-center lg:justify-start'>Trending Posts</h2>
        {
          RecentPostData.map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.imageuri ? dataItems.imageuri : profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {dataItems.date}
                category = {dataItems.category}
              />
          ))
        }
       </section>
    </div>
  )
}

export default DashboardRightNav