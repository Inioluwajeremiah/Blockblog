import React from 'react'
import { GraphData } from './GraphData'


const DashBoardGraph = () => {
  return (
    <div className='flex md:flex-row md:flex-wrap flex-col gap-2 items-center mx-4'>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[100%] md:w-[200px] mx-[auto]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[100%] md:w-[200px] mx-[auto]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[100%] md:w-[200px] mx-[auto]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[100%] md:w-[200px] mx-[auto]'>
            {
                GraphData.academy.map((dataItems, index) => (
                    <span  key={index} className='md:w-[25px] w-[15%] bg-app-color' style={{height: dataItems.posts, writingMode: 'vertical-lr'}}>{dataItems.posts}</span>
                ))
            }
        </div>
        <div className='flex flex-row gap-4 md:gap-2 mb-24 p-12 md:p-4 items-end shadow-lg w-[100%] md:w-[200px] mx-[auto]'>
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