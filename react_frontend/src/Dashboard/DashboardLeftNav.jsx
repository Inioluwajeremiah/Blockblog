import React, { useContext } from 'react';
import {AiOutlineHome, AiOutlineBank, AiOutlineEdit, AiFillLock, AiOutlineClose} from 'react-icons/ai';
import {TiWeatherStormy} from 'react-icons/ti';
import {MdOutlineSchool} from 'react-icons/md';
import {RiGovernmentLine} from 'react-icons/ri';
import {FaRobot} from 'react-icons/fa';
import {GoChecklist} from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi';
import {IoAnalyticsOutline} from 'react-icons/io5';
import { BlockBlogContext } from '../context/BlockBlogContext';
import {AiOutlineMenu} from 'react-icons/ai';

const NavItem = ({icon, title, link, ...children}) => {
    return (
        <li className="flex flex-row gap-4 items-center p-2 text-text-color hover:cursor-pointer w-full hover:text-app-color hover:tracking-wide ease-in duration-500 "  {...children}>
            <span className='font-black text-app-color'>{icon}</span>
            <a href={link}>{title}</a>
        </li>
    )
}

const DashboardLeftNav = () => {

    const ShowMenu = () => {
        const menuItem = document.getElementById('menu-item');
        menuItem.style.display = 'block'; 
        menuItem.style.position = 'absolute'; 

    }

    const CloseMenu = () => {
        const menuItem = document.getElementById('menu-item');
        menuItem.style.display = 'none';
    }


    const { connectWallet, blockAccount } = useContext(BlockBlogContext)
    return (
        <>
            <p className="lg:hidden" onClick={ShowMenu} id="menu-icon">{<AiOutlineMenu/>}</p>
            <div className="hidden z-20 lg:inline left-0 p-2 max-h-[100vh] bg-white" id='menu-item' >
                <div className='flex flex-row gap-2 items-center justify-between'>
                    <h1 className='text-center p-4 text-text-color tracking-wide font-black text-lg'>Dashboard</h1>
                    <p className="lg:hidden" onClick={CloseMenu} id="close-icon">{<AiOutlineClose/>}</p>
                </div>
                <ul className='overflow-y-scroll p-4 h-full shadow-lg' >
                {
                        blockAccount ? "" :
                        // <button onClick={connectWallet} className='bg-app-color p-2'>Connect Wallet</button>
                        // <NavItem icon={<FiLogOut/>} title="Connect Wallet" onClick={connectWallet} /> 
                        <NavItem icon="" title="Connect Wallet" onClick={connectWallet} className="bg-app-color p-2 rounde-md" /> 
                    }
                    <NavItem icon={<AiOutlineHome/>} title="Home" link=""/>
                    <NavItem icon={<MdOutlineSchool/>} title="Academy" link="/academy" />
                    <NavItem icon={<TiWeatherStormy/>} title="Climate" link="/climate" />
                    <NavItem icon={<AiOutlineBank/>} title="Finance" link="/finance" />
                    <NavItem icon={<RiGovernmentLine/>} title="Politics" link="/politics" />
                    <NavItem icon={<FaRobot/>} title="Technology" link="/technology"/>
                    <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
                    
                    <NavItem icon={<AiOutlineEdit/>} title="New Post" link="#newpost"/>
                    <NavItem icon={<GoChecklist/>} title="My Posts" link="#myposts"/>
                    <NavItem icon={<IoAnalyticsOutline/>} title="Analytics" link="#analytics" />
                    <NavItem icon={<GoChecklist/>} title="Recent Posts" link="#recentposts" />
                    <NavItem icon={<GoChecklist/>} title="Trending Posts" link="#trendingposts" />
                    <div className='h-[1px] w-full bg-[#ddd] my-2'></div>
                    
                    <NavItem icon={<AiFillLock/>} title="Change Password" link="/changepassword"/>
                    <NavItem icon={<AiFillLock/>} title="Reset Password" link="/resetpassword"/>
                    <NavItem icon={<FiLogOut/>} title="SignOut" />
                
                </ul>   

            </div>

        </>
    )
}

export default DashboardLeftNav