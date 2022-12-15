import React from 'react'
import { GraphData } from './GraphData'


const DashBoardGraph = () => {
  return (
    <div className='flex md:flex-row flex-col gap-2 items-center'>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[80%] lg:w-[20%]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[80%] lg:w-[20%]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[80%] lg:w-[20%]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[80%] lg:w-[20%]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[80%] lg:w-[20%]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
    </div>
  )
}

export default DashBoardGraph;