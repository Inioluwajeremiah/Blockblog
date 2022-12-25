
import React, { useState, useContext, useEffect } from 'react';
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
import { BlockBlogContext } from '../context/BlockBlogContext';
import ipfs from '../assets/ipfs';
import { PINATA_API_KEY, PINATA_API_SECRET_KEY , PINATA_API_JWT} from '../../ipfsconfig';
import axios from 'axios';



// custom th element funcctional component
const TableCell = ({tableText}) => {
    return ( <td className='items-left  p-2'>{tableText}</td> )
}
// custom th element funcctional component
const TableHeaderCell = ({headerText}) => {
    return ( <th className='items-left p-2'>{headerText}</th> )
}
// custom tr element funcctional component
const TableRow = ({postNo, title, category, subcategory, body, likes}) => {
    return (
        <tr className='text-sm text-text-color even:bg-gray-100  '>
            <TableCell tableText={postNo}/>
            <TableCell tableText={title}/>
            <TableCell tableText={category}/>
            <TableCell tableText={subcategory}/>
            <TableCell tableText={body}/>
            <TableCell tableText={likes}/>
        </tr>
    )
}
// custom select element funcctional component
const SelectComponent = ({data, onChange }) => {
    return(
        <select id="postCategoy" onChange={onChange} className="border-solid border-[1px] border-#ddd">
        {
            data.map((dataItem, index) => 
            <option className='text-text-color m-2 border-solid border-[1px] border-#ddd' key={index} value={dataItem.value}>{dataItem.label}</option>   
            )
        }
    </select>
    )
}

// custom input element funcctional component
const InputComponent = ({type, placeholder, ...rest }) => {
    return (
        <input className='text-text-color outline-none border-solid border-[1px] border-[#ddd] w-full px-[15px] py-2' type={type} placeholder={placeholder} {...rest}  />

    )
}

// custom input label functional component
const InputLabel = ({title}) => {
    return ( 
       <h3 className='text-text-color text-base mt-2 '>{title}</h3>
    )
}

// hande submit button

const DashboardMain = () => {
    const [title, setTitle] = useState('');
    const [currentCategory, setCurrentCategory] = useState(''); 
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [editorState, setEditorState] = React.useState( () => EditorState.createEmpty(),)
    const [imageToArray, setImageToArray] = useState([]);
    const [blobImage, setBlobImage] = useState(null);
    const [fileImage, setFileImage] = useState(null);
    const [imagHashResult, setImageHashResult] = useState(null);
    const {connectWallet, blockAccount} = useContext(BlockBlogContext);

   
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

    // hande input file button
    // const GetFile = (event) => {
    //     event.preventDefault()
    //     const selectedImage = event.target.files[0];
    //     setFileImage(selectedImage);
         
    //     console.log(selectedImage);
    //     console.log();

    //     const blob = new Blob([selectedImage], {type: "image/*"})
    //     setBlobImage(blob);
    //     console.log(blob);
    //     let reader = new FileReader();
    //     reader.readAsArrayBuffer(selectedImage)
    //     reader.addEventListener("loadend", function() {
    //         console.log(reader.result);
    //         const uint8array = new Uint8Array(reader.result);
    //         imageToArray.push(uint8array);
    //         console.log(imageToArray);
    //         console.log("uint8array => ", uint8array);
    //      });
        
    // }

    const GetFile = async (event) => {

        event.preventDefault()
        const selectedImage = event.target.files[0];
        setFileImage(selectedImage);

        if (selectedImage)  {
            try {
                const formData = new FormData();
                formData.append("file", selectedImage);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        // 'pinatApiKey': 'f3335ad8785f15de71b1', // PINATA_API_KEY,
                        // 'pinataApiSecretKey': '2e43c4178000057b18b203e9abbab503db06c2caa3c1fd6757a64f397ab749e6', // PINATA_API_SECRET_KEY,
                        "Content-Type": "multipart/form-data",
                        "Authorization": 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNjM4NDc2ZC1lNmNkLTQ2Y2UtYTEyMi1mMTk4MDk1MGQ5N2QiLCJlbWFpbCI6ImFkZXdhcmFpbmlvbHV3YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZjMzMzVhZDg3ODVmMTVkZTcxYjEiLCJzY29wZWRLZXlTZWNyZXQiOiIyZTQzYzQxNzgwMDAwNTdiMThiMjAzZTlhYmJhYjUwM2RiMDZjMmNhYTNjMWZkNjc1N2E2NGYzOTdhYjc0OWU2IiwiaWF0IjoxNjcxOTU4NzUxfQ.8gmjkDnuoUMAUSxbZfDkELtyzDP_B3tCX_GP_mSTAZc'
                    },
                });
                console.log(resFile.data.IpfsHash);
                setImageHashResult(`ipfs://${resFile.data.IpfsHash}`)
                
                console.log(imagHashResult);    
            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error.message, error.request, error.response)
            }
        }
    }
    

    const SubmitForm = async (e) => {
        e.preventDefault()
        const result = await ipfs.add(imageToArray);
        console.log(result[0].hash);
    }

  return (
    <div className='w-[100%] lg:w-[62%] mx-[auto]'>
        <div>
            <img src="" alt="" />
            <div>
                <p>{blockAccount}</p>
                {/* <div>{imageBuffer}</div> */}
                <p>Username</p>
            </div>
           
            
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
           
            {/* <RichTextEditor/> */}

            <InputLabel title="Add Image"/>
            <input type="file" accept="image/*" onChange={GetFile} id="upload-btn"/>

            <div className='w-full flex justify-center'>
                <button type='submit' value='Submit' onClick={SubmitForm} className='p-2 bg-app-color text-white rounded-md m-4 text-center hover:tracking-widest ease-in-out duration-500'> Submit </button>
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
            <div className='flex flex-row flex-wrap gap-2 items-center text-text-color p- mb-8 mx-[auto]'>
                {
                    AnalyticsCardData.map((dataItem, index) => 
                        <div key={index} className='items-center text-text-color p-4 shadow-lg rounded mb-4 mx-[auto]'>
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

export default DashboardMain;