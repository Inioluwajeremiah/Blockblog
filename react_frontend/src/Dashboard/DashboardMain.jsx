import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
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
    <div>
        <div>
            <input type="text" />
            <span><AiOutlineSearch/></span>
        </div>

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
            


        </section>

        <section>
            <h2>Recent Posts</h2>
        </section>

        <section>
            <h2>Analytics</h2>
        </section>
        

    </div>
  )
}

export default DashboardMain