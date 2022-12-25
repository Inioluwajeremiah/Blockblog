import React, { useContext } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import { RecentPostData } from './RecentPostData';
import { TrendingPostData } from './TrendingPostsData';
import { BlockBlogContext } from '../context/BlockBlogContext';

const CustomCard = ({ profilePics, title, author, date, category }) => {
    return (
      <div className=' w-full flex flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 w-fit mx-[auto]'>
        <div className='w-[50px] h-[50px] rounded-full'>
          <img src={profilePics} alt="avatar profile" />
        </div>
        <div>
          <p className='font-bold text-base'>{title}</p>
          <div className='flex flex-row justify-between text-sm'>
            <p className='font-bold'>{author}</p>
            <p className=''>{category}</p>
            <p className=''>{date}</p>
          </div>
        </div>
      </div>
    )
}
const DashboardRightNav = () => {
  const {blockAccount } = useContext(BlockBlogContext)
  return (
    <div  className='lg:w-[35vw] w-[100%] mx-[auto]'>
       <section id="recentposts" className='mx-4 mt-12 lg:mt-0'>
        <h2 className='text-text-color font-bold text-lg flex justify-center lg:justify-start'>Recent Posts</h2>
        {
          RecentPostData.map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.profilePics}
                title = {dataItems.title}
                author = {dataItems.author}
                date = {dataItems.date}
                category = {dataItems.category}
              />
          ))
        }
       </section>
       <section id='trendingposts' className='mx-4  mt-12 lg:mt-0'>
        <h2 className='flex text-text-color font-bold text-lg mt-8 justify-center lg:justify-start'>Trending Posts</h2>
        {
          TrendingPostData.map((dataItems, index) => (
              <CustomCard key={index} 
                profilePics = {dataItems.profilePics}
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