import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { UserPostData } from './UserPostsData';

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
    <div>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

        <section>
            <h2>Text Editor</h2>

        </section>

        <section>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>Recent Posts</h2>
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
                        UserPostData.map((dataItem, index) => (
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

        <section>
            <h2>Analytics</h2>
        </section>
        

    </div>
  )
}

export default DashboardMain