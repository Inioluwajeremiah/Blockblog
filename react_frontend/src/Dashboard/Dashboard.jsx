import React from 'react'
import DashboardLeftNav from './DashboardLeftNav'
import DashboardMain from './DashboardMain'
import DashboardRightNav from './DashboardRightNav'

const Dashboard = () => {
  return (
    <div className='flex flex-row p-4'>
        <DashboardLeftNav />
        <div className='flex min-width-[768px] flex-col lg:flex-row lg:justify-between w-full px-4'>
            <DashboardMain />
            <DashboardRightNav/>
        </div>
        
    </div>
  )
}

export default Dashboard