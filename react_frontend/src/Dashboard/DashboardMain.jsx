
import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { UserPostData } from './UserPostsData';
import { AnalyticsCardData } from './AnalyticsCardData';
import DashBoardGraph from './DashBoardGraph';
import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import './Draft.css';
import './RichTextStyle.css';
import '../../node_modules/draft-js/dist/Draft.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichTextEditor from '../RichText/RichText';
import { SelectionData, SubCategory } from './SelectionData';


const TableCell = ({tableText}) => {
    return ( <td className='items-left  p-2'>{tableText}</td> )
}
const TableHeaderCell = ({headerText}) => {
    return ( <th className='items-left p-2'>{headerText}</th> )
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
const SelectComponent = ({data, onChange }) => {
    return(
        <select id="postCategoy" onChange={onChange} className="">
        {
            data.map((dataItem, index) => 
            <option className='text-text-color m-2 border-none' key={index} value={dataItem.value}>{dataItem.label}</option>   
            )
        }
    </select>
    )
}

const InputComponent = ({type, placeholder, ...rest }) => {
    return (
        <input className='text-text-color outline-none border-solid border-[1px] border-[#ddd] w-full px-[15px] py-2' type={type} placeholder={placeholder} {...rest}  />

    )
}

const InputLabel = ({title}) => {
    return ( 
       <h3 className='text-text-color text-base mt-2 '>{title}</h3>
    )
}

const DashboardMain = () => {
    const [title, setTitle] = useState('');
    const [currentCategory, setCurrentCategory] = useState(''); 
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [editorState, setEditorState] = React.useState( () => EditorState.createEmpty(),)

   
    console.log(currentSubCategory);

    const changeCategory = (e) => {
        setCurrentCategory(e.target.value)
        console.log(currentCategory);
      }
    const changeSubCategory = (e) => {
        setCurrentSubCategory(e.target.value)
        console.log(currentSubCategory);
    }
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };


  return (
    <div className='w-[100%] lg:w-[62%] mx-[auto]'>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

        <section id='newpost' className='mx-4 shadow-lg p-4'>
            <h2 className='text-text-color font-bold text-lg mb-2'>New Post</h2>
            
            <InputLabel title="Title"/>
            <InputComponent type="text" placeholder="Title"/>
            
            <InputLabel title="Select Category" />
            <SelectComponent data={ SelectionData} onChange={changeCategory} />
            
            { (currentCategory == "") ? " " : <InputLabel title={`Select ${currentCategory} Subcategory`}/> }
            {
                    (currentCategory == "Academy") ?  <SelectComponent data={ SubCategory.Academy } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Climate") ?  <SelectComponent data={ SubCategory.Climate } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Finance") ?  <SelectComponent data={ SubCategory.Finance } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Politics") ?  <SelectComponent data={ SubCategory.Politics } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Technology") ?  <SelectComponent data={ SubCategory.Technology } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   ""
            }

            <InputLabel title="Content"/>

            {/* <Editor 
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                      { text: 'APPLE', value: 'apple', url: 'apple' },
                      { text: 'BANANA', value: 'banana', url: 'banana' },
                      { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                      { text: 'DURIAN', value: 'durian', url: 'durian' },
                      { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                      { text: 'FIG', value: 'fig', url: 'fig' },
                      { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                      { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                    ],
                  }}
                  editorState={editorState}
                  toolbarClassName="rdw-storybook-toolbar"
                  wrapperClassName="rdw-storybook-wrapper"
                  editorClassName="rdw-storybook-editor"

                  onEditorStateChange={onEditorStateChange}
                  toolbar={{
                    link: {
                      defaultTargetOption: '_blank',
                    },
                  }}
            /> */}
           
            <RichTextEditor/>

            <InputLabel title="Add Image"/>
            <InputComponent type="file" accept="image/*"/>

            <div className='w-full flex justify-center'>
                <button type='submit' value='Submit' className='p-2 bg-app-color text-white rounded-md m-4 text-center hover:tracking-widest ease-in-out duration-500'> Submit </button>
            </div>
           
        </section>

        <section id='myposts' className='mx-4 shadow-lg p-4 mt-12'>
            <h2 className='text-text-color font-bold text-lg mb-2'>My Posts</h2>
            <table className='px-4 w-full'>
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

        <section id='analytics' className='mx-4 shadow-lg p-4 mt-12'>
            <h2 className='text-text-color font-bold text-lg mb-2'>Analytics</h2>
            <div className='flex flex-row flex-wrap gap-4 items-center text-text-color p- mb-8 mx-4'>
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
                <h3 className='text-text-color font-bold text-base mb-2'> Graph</h3>
                <DashBoardGraph/>

            </div>
        </section>
        

    </div>
  )
}

export default DashboardMain