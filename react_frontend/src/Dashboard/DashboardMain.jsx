import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
<<<<<<< HEAD
import { useState } from 'react';
import { SelectionData , ClimateSubCategory, TechnologySubCategory, PoliticsSubCategory} from './SelectionData';
import { AcademySubCategory, FinanceSubCategory } from './SelectionData';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextInput = ({inputType, placeholder, ...rest}) => {
    return (
        <div>
            <input type={inputType} placeholder={placeholder} {...rest} />
        </div>
    )
}
const TextLabel = ({title}) => {
    return(
        <p>{title}</p>
    )
   
}

const SelectOption = ({optionValue, optionLabel, selectedValue, handleChange }) => {
    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value={optionValue}>{optionLabel}</option>
        </select>
    )
}
=======
import { UserPostData } from './UserPostsData';
import { AnalyticsCardData } from './AnalyticsCardData';
import DashBoardGraph from './DashBoardGraph';
>>>>>>> b17211c59ed1196accdf324d53a6dd676a6f2e14

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
    const [currentCategory, setCurrentCategory] = useState(''); 
    const [currentSubCategory, setCurrentSubCategory] = useState('') ;
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const changeCategory = (categoryOption) => {
        setCurrentCategory(categoryOption)
      }
    const changeSubCategory = (subCategoryOption) => {
    setCurrentSubCategory(subCategoryOption)
    }


  return (
    <div className=''>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

<<<<<<< HEAD
        <section id="newpost">
            <div>
                <h2>New Post</h2>
                <p>Select category</p>
                <select
                    onChange={(event) => changeCategory(event.target.value)}
                    value={currentCategory}>
                        {
                            SelectionData.map((Items, key) =>(
                                
                            <option key={key} value={Items.value}>{Items.label}</option>
                        ))}
                </select>

                <TextLabel title="Select category"/>
                {
                        currentCategory == "Academy"
                    ? 
                        <select 
                            onChange={(event) => changeSubCategory(event.target.value)}
                            value={currentSubCategory}>
                                {
                                    
                                AcademySubCategory.map((SubItems , index) =>(
                                        <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                ))} 
                        </select>   
                    :
                        currentCategory == "Climate"
                    ?
                        <select 
                            onChange={(event) => changeSubCategory(event.target.value)}
                            value={currentSubCategory}>
                                {
                                    
                                    ClimateSubCategory.map((SubItems , index) =>(
                                        <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                ))} 
                        </select> 
                    :
                        currentCategory == "Finance"
                        ?
                            <select 
                                onChange={(event) => changeSubCategory(event.target.value)}
                                value={currentSubCategory}>
                                    {
                                        
                                    FinanceSubCategory.map((SubItems , index) =>(
                                            <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                    ))} 
                            </select> 
                    :
                    currentCategory == "Politics"
                    ?
                        <select 
                            onChange={(event) => changeSubCategory(event.target.value)}
                            value={currentSubCategory}>
                                {
                                    
                                PoliticsSubCategory.map((SubItems , index) =>(
                                        <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                ))} 
                        </select> 
                    :
                    currentCategory == "Technology"
                    ?
                        <select 
                            onChange={(event) => changeSubCategory(event.target.value)}
                            value={currentSubCategory}>
                                {
                                    
                                TechnologySubCategory.map((SubItems , index) =>(
                                        <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                ))} 
                        </select> 
                    :
                        <select 
                            onChange={(event) => changeSubCategory(event.target.value)}
                            value={currentSubCategory}>
                                {
                                    
                                AcademySubCategory.map((SubItems , index) =>(
                                        <option key={index} value={SubItems.value}>{SubItems.label}</option>
                                ))} 
                        </select>  
                }

                <TextLabel title="Title"/>
                <TextInput type='text' placeholder="Post title" />
                <TextLabel title="Select picture"/>
                <input type="file"  accept="image/png, image/jpeg, image/jpg"/>
                <TextLabel title="Post details"/>
                <Editor editorState={editorState} onChange={setEditorState} />

                <input type="submit" value="Submit"/>

                       
            </div>
            

=======
        <section id='newpost'>
            <h2 className='text-text-color font-bold text-lg mt-8 mx-4'>New Post</h2>
>>>>>>> b17211c59ed1196accdf324d53a6dd676a6f2e14

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