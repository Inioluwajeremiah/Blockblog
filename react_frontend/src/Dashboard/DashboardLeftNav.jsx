import React from 'react';
import {AiOutlineHome, AiOutlineBank, AiOutlineEdit} from 'react-icons/ai';
import {TiWeatherStormy} from 'react-icons/ti';
import {MdOutlineSchool} from 'react-icons/md';
import {RiGovernmentLine} from 'react-icons/ri';
import {FaRobot} from 'react-icons/fa';
import {GoChecklist} from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi';
import {IoAnalyticsOutline} from 'react-icons/io5';


const NavItem = ({icon, title}) => {
    return (
        <li className="flex flex-row gap-4 items-center p-2 text-text-color hover:cursor-pointer w-full hover:text-app-color hover:tracking-wide ease-in duration-500   ">
            <span>{icon}</span>
            <a href="/">{title}</a>
        </li>
    )
}

const DashboardLeftNav = () => {
  return (
    <div>
        <h1 className='text-center p-4 text-text-color tracking-wide font-black text-lg'>Dashboard</h1>
        <ul className='overflow-y-scroll height-[100vh] p-4 ' >
            <NavItem icon={<AiOutlineHome/>} title="Home"/>
            <NavItem icon={<TiWeatherStormy/>} title="Climate" />
            <NavItem icon={<MdOutlineSchool/>} title="Education" />
            <NavItem icon={<AiOutlineBank/>} title="Finance" />
            <NavItem icon={<RiGovernmentLine/>} title="Politics" />
            <NavItem icon={<FaRobot/>} title="Technology" />
            <NavItem icon={<AiOutlineEdit/>} title="New Post" />
            <NavItem icon={<GoChecklist/>} title="My Posts" />
            <NavItem icon={<IoAnalyticsOutline/>} title="Analytics" />
            <NavItem icon={<GoChecklist/>} title="Recent Posts" />
            <NavItem icon={<GoChecklist/>} title="Trending Posts" />
            <NavItem icon={<FiLogOut/>} title="SignOut" />
        </ul>   

    </div>
  )
}

export default DashboardLeftNav