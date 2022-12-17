import React from 'react';
import {AiOutlineHome, AiOutlineBank, AiOutlineEdit} from 'react-icons/ai';
import {TiWeatherStormy} from 'react-icons/ti';
import {MdOutlineSchool} from 'react-icons/md';
import {RiGovernmentLine} from 'react-icons/ri';
import {FaRobot} from 'react-icons/fa';
import {GoChecklist} from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi';
import {IoAnalyticsOutline} from 'react-icons/io5';


const NavItem = ({icon, title, link}) => {
    return (
        <li className="flex flex-row gap-4 items-center p-2 text-text-color hover:cursor-pointer w-full hover:text-app-color hover:tracking-wide ease-in duration-500   ">
            <span className='font-black text-app-color'>{icon}</span>
            <a href={`${link}`}>{title}</a>
        </li>
    )
}

const DashboardLeftNav = () => {
  return (
    <div>
        <h1 className='text-center p-4 text-text-color tracking-wide font-black text-lg'>Dashboard</h1>
        <ul className='overflow-y-scroll max-h-screen p-4 ' >
            <NavItem icon={<AiOutlineHome/>} title="Home" link=""/>
            <NavItem icon={<MdOutlineSchool/>} title="Academy" link="academy" />
            <NavItem icon={<TiWeatherStormy/>} title="Climate" link="climate" />
            <NavItem icon={<AiOutlineBank/>} title="Finance" link="finance" />
            <NavItem icon={<RiGovernmentLine/>} title="Politics" link="politics" />
            <NavItem icon={<FaRobot/>} title="Technology" link="technology"/>
            <NavItem icon={<AiOutlineEdit/>} title="New Post" link="#newpost"/>
            <NavItem icon={<GoChecklist/>} title="My Posts" link="#myposts"/>
            <NavItem icon={<IoAnalyticsOutline/>} title="Analytics" link="#analytics" />
            <NavItem icon={<GoChecklist/>} title="Recent Posts" link="#recentposts" />
            <NavItem icon={<GoChecklist/>} title="Trending Posts" link="#trendingposts" />
            <NavItem icon={<FiLogOut/>} title="SignOut" />
        </ul>   

    </div>
  )
}

export default DashboardLeftNav