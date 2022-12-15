import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import { RecentPostData } from './RecentPostData';
import { TrendingPostData } from './TrendingPostsData';

const CustomCard = ({ profilePics, title, author, date, category }) => {
    return (
      <div className='flex flex-row gap-4 items-center text-text-color p-4 shadow-lg rounded mb-4 w-fit'>
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
  return (
    <div>
       <section id="recentposts">
        <h2 className='text-text-color font-bold text-lg'>Recent Posts</h2>
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
       <section>
        <h2 className='text-text-color font-bold text-lg mt-8'>Trending Posts</h2>
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