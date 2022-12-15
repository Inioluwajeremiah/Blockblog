import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { UserPostData } from './UserPostsData';
import { AnalyticsCardData } from './AnalyticsCardData';
import DashBoardGraph from './DashBoardGraph';

const TableCell = ({tableText}) => {
    return ( <td className='items-left max-w-[250px] p-2'>{tableText}</td> )
}
const TableHeaderCell = ({headerText}) => {
    return ( <th className='items-left max-w-[250px] p-2'>{headerText}</th> )
}
const TableRow = ({postNo, title, category, subcategory, body, likes}) => {
    return (
        <tr className='text-sm text-text-color even:bg-gray-100  '>
            <TableCell tableText={postNo}/>
            <TableCell tableText={title}/>
            <TableCell tableText={category}/>
            <TableCell tableText={subcategory}/>
            <TableCell tableText={body}/>
            <TableCell tableText={likes}/>

            {/* <td>{postNo}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{subcategory}</td>
            <td>{body}</td>
            <td>{likes}</td> */}
        </tr>
    )
}
const DashboardMain = () => {
  return (
    <div className=''>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

        <section id='newpost'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>New Post</h2>

        </section>

        <section id='myposts'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>My Posts</h2>
            <table className='px-4 w-fit shadow-lg mx-4'>
                <thead className='text-theme-color bg-text-color font-bold text-base w-fit items-left justify-left px-4'>
                    <tr> 
                        <TableHeaderCell headerText="S/N" />
                        <TableHeaderCell headerText="Title" />
                        <TableHeaderCell headerText="Category" />
                        <TableHeaderCell headerText="Sub Category" />
                        <TableHeaderCell headerText="Body" />
                        <TableHeaderCell headerText="Likes" />
                    </tr>
                </thead>
                <tbody>
                    {
                        UserPostData.slice(0,5).map((dataItem, index) => (
                            <TableRow key={index} 
                                postNo={index+1}
                                title ={dataItem.title}
                                category={dataItem.category}
                                subcategory={dataItem.subcategory}
                                body={dataItem.body}
                                likes={dataItem.likes}
                            />
                        ))
                    }
                </tbody>
            </table>
        </section>

        <section id='analytics'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>Analytics</h2>
            <div className='flex flex-row gap-4 items-center text-text-color p- mb-8'>
                {
                    AnalyticsCardData.map((dataItem, index) => 
                        <div key={index} className='items-center text-text-color p-4 shadow-lg rounded mb-4 w-fit'>
                            <span className='flex justify-center py-2 text-2xl font-black text-app-color'><dataItem.icon/></span>
                            <div className='flex flex-row gap-2 items-center justify-between'>
                                <p className='font-medium text-base'>{dataItem.title}</p>
                                <p className='text-blue-500 text-sm i'>{dataItem.score}</p>
                            </div>
                        </div>
                    )
                }

            </div>

            <div>
                <h3 className='text-text-color font-bold text-base mb-8'> Graph</h3>
                <DashBoardGraph/>

            </div>
        </section>
        

    </div>
  )
}

export default DashboardMain