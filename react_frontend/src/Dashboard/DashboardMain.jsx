import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { UserPostData } from './UserPostsData';
import { AnalyticsCardData } from './AnalyticsCardData';
import DashBoardGraph from './DashBoardGraph';
import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
// import './Draft.css';
// import './RichTextStyle.css';
// import '../../node_modules/draft-js/dist/Draft.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichTextEditor from '../RichText/RichText';
import { SelectionData, SubCategory } from './SelectionData';


const TableCell = ({tableText}) => {
    return ( <td className='items-left max-w-[75p%]  p-2'>{tableText}</td> )
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
const SelectComponent = ({data, onChange }) => {
    return(
        <select id="postCategoy" onChange={onChange}>
        {
            data.map((dataItem, index) => 
            <option key={index} value={dataItem.value}>{dataItem.label}</option>   
            )
        }
    </select>
    )
}

const InputLabel = ({title}) => {
    return ( 
       <h3>{title}</h3>
    )
}

const DashboardMain = () => {
    const [title, setTitle] = useState('');
    const [currentCategory, setCurrentCategory] = useState(''); 
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [editorState, setEditorState] = React.useState( () => EditorState.createEmpty(),)

   
    console.log(currentSubCategory);

    const changeCategory = (categoryOption) => {
        
        setCurrentCategory(categoryOption)
        console.log(currentCategory);
      }
    const changeSubCategory = (subCategoryOption) => {
    setCurrentSubCategory(subCategoryOption)
    }
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };


  return (
    <div className='w-[100%] lg:w-[62%]'>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

        <section id='newpost'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>New Post</h2>
            <InputLabel title="Title"/>
            <input type="text" placeholder='Title'  />
            {/* onChange={(title) => setTitle(title)} */}
            <InputLabel title="Select Category" />
                <select name="postCategory" id="postCategoy" onChange={changeCategory}>
                {
                    SelectionData.map((dataItem, index) => 
                    <option key={index} value={dataItem.value}>{dataItem.label}</option>   
                    )
                }
            </select>
            {/* <SelectComponent data={ SelectionData} onChange={changeCategory} /> */}
            
            <InputLabel title="Select Subcategory"/>
            {
                    (currentCategory == "Academy") ?  <SelectComponent data={ SubCategory.Academy } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Climate") ?  <SelectComponent data={ SubCategory.Climate } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Finance") ?  <SelectComponent data={ SubCategory.Finance } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Politics") ?  <SelectComponent data={ SubCategory.Politics } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   (currentCategory == "Technology") ?  <SelectComponent data={ SubCategory.Technology } onChange={(cat) => setCurrentSubCategory(cat)} />
                :   ""
            }

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
           
            {/* <RichTextEditor/> */}
        </section>

        <section id='myposts'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>My Posts</h2>
            <table className='px-4 lg:w-full md:w-[40%] shadow-lg mx-4'>
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
                <h3 className='text-text-color font-bold text-base mb-8 mx-4'> Graph</h3>
                <DashBoardGraph/>

            </div>
        </section>
        

    </div>
  )
}

export default DashboardMain