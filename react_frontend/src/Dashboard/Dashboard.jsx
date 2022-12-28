import React from 'react'
import Header from '../components/Header'
import DashboardLeftNav from './DashboardLeftNav'
import DashboardMain from './DashboardMain'
import DashboardRightNav from './DashboardRightNav'

const Dashboard = () => {
  return (
    <div>
        {/* <Header/> */}

      <div className='flex flex-row gap-2 justify-between p-4 relative'>
          <DashboardLeftNav />
          <div className='flex  flex-col lg:flex-row lg:justify-between w-full px-4'>
              <DashboardMain />
              <DashboardRightNav/>
          </div>
          
      </div>
    </div>
  )
}

export default Dashboard