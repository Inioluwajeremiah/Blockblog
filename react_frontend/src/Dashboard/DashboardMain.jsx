
import React, { useState, useContext, useEffect } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { UserPostData } from './UserPostsData';
import { AnalyticsCardData } from './AnalyticsCardData';
import DashBoardGraph from './DashBoardGraph';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SelectionData, SubCategory } from './SelectionData';
import { BlockBlogContext } from '../context/BlockBlogContext';
import ipfs from '../assets/ipfs';
import { PINATA_API_KEY, PINATA_API_SECRET_KEY , PINATA_API_JWT} from '../../ipfsconfig';
import axios from 'axios';
import profileImage from '../assets/images/avartar10.png';




// configure ckeditor plugins
// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
//         heading: {
//             options: [
//                 { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//                 { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//                 { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
//             ]
//     }
// } )
// .catch( error => {
//     console.log( error );
// } );


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
    const [authorsname, setAuthorsName] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [currentCategory, setCurrentCategory] = useState(''); 
    const [currentSubCategory, setCurrentSubCategory] = useState('');
    const [postContent, setpostContent] = useState('');
    const [fileImage, setFileImage] = useState(null);
    const [imageHashResult, setImageHashResult] = useState('');
    const [blogCount, setBlogCount] = useState(0);

    
    const {connectWallet, blockAccount, BlogNetworkContract} = useContext(BlockBlogContext);
    

    
            // const iposts = retrievedposts.map((dataItem) => ({
            //     addressTo: dataItem.receiver,
            //     addressFrom: dataItem.sender,
            //     timestamp: new Date(dataItem.timestamp.toNumber() * 1000).toLocaleString(),
            //     title: dataItem.postTitle,
            //     category: dataItem.postCategory,
            //     subcategory: dataItem.postSubCategory
            //   }));
        

    let displayContent = document.getElementById('displayContent')
    if (postContent != '') {
        displayContent.innerHTML = postContent
    }

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

    // get image file
    const GetFile = async (event) => {

        event.preventDefault()
        const selectedImage = event.target.files[0];
        setFileImage(selectedImage);

        if (selectedImage)  {
            try {
                const formData = new FormData();
                formData.append("file", selectedImage); 

                const uploadFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": 'Bearer ' + PINATA_API_JWT
                    },
                });
                const hash = "https://gateway.pinata.cloud/ipfs/" + uploadFile.data.IpfsHash
                console.log(uploadFile.data.IpfsHash);
                console.log("hash => ", hash);
                setImageHashResult(hash)
                console.log("image hash => ", imageHashResult);    
            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error.message, error.request, error.response)
            }
        }
    }
    

    // function to submit form 
    const SubmitForm = async (e) => {
        e.preventDefault()
        // blognetwork contract to add data to blockchain
        console.log(authorsname, postTitle, currentCategory, currentSubCategory, postContent, imageHashResult);
        console.log(BlogNetworkContract);
        // await (await marketContract.CreateNFTItem(transactionId, PriceTag, tokenContract.address)).wait();
        // await BlogNetworkContract.createPost(authorsname, postTitle, currentCategory, currentSubCategory,postContent, imageHashResult);
        try {

            await BlogNetworkContract.createPost(authorsname, postTitle, currentCategory, currentSubCategory,postContent, imageHashResult);
        } catch (error) {
            alert(error)
        }
    }

    // useEffect( () => {
    //     retrievePosts();
    // }, [])

  return (
    <div className='w-[100%] lg:w-[56%] mx-[auto] list-disc '>
        <div className="flex flex-row gap-2 items-center">
            {/* onClick{()=> }> */}
            <div className="flex flex-row gap-2 items-center">
                    <div className="h-[45px] w-[45px]">
                        <img src={profileImage} alt=""/> 
                    </div>
                    <div>
                        <p>{blockAccount.slice(0,5)}...{blockAccount.slice((blockAccount.length-5),blockAccount.length)}</p>
                        <p>John DOe</p>
                    </div>
                        {/* <div>{imageBuffer}</div> */}
            </div>                
        </div>

        <section id='newpost' className='mx-4 shadow-lg p-4'>
            <h2 className='text-text-color font-bold text-lg mb-2'>New Post</h2>
            
            <InputLabel title="Author"/>
            <InputComponent type="text" placeholder="Name" name="authorsname" id="authorsname" onChange={(atn) => setAuthorsName(atn.target.value)}/>
            
            <InputLabel title="Title"/>
            <InputComponent type="text" placeholder="Title" name="posttitle" id="posttitle" onChange={(title) => setPostTitle(title.target.value)}/>
            
            <InputLabel title="Select Category" />
            <SelectComponent data={ SelectionData} onChange={changeCategory} />
            
            { (currentCategory == "") ? " " : <InputLabel title={`Select ${currentCategory} Subcategory`}/> }
            {
                    (currentCategory == "Academy") ?  <SelectComponent data={ SubCategory.Academy } onChange={(cat) => setCurrentSubCategory(cat.target.value)} />
                :   (currentCategory == "Climate") ?  <SelectComponent data={ SubCategory.Climate } onChange={(cat) => setCurrentSubCategory(cat.target.value)} />
                :   (currentCategory == "Finance") ?  <SelectComponent data={ SubCategory.Finance } onChange={(cat) => setCurrentSubCategory(cat.target.value)} />
                :   (currentCategory == "Politics") ?  <SelectComponent data={ SubCategory.Politics } onChange={(cat) => setCurrentSubCategory(cat.target.value)} />
                :   (currentCategory == "Technology") ?  <SelectComponent data={ SubCategory.Technology } onChange={(cat) => setCurrentSubCategory(cat.target.value)} />
                :   ""
            }

            <InputLabel title="Content"/>
            <div className='' id="#editorc">
          {/* Ckeditor - a rich text editor */}
            <CKEditor
                editor={ ClassicEditor }
                onReady={ ( editor ) => {
                console.log( "CKEditor5 React Component is ready to use!", editor );
                } }
                onChange={ ( event, editor ) => {
                let data = editor.getData();
                setpostContent(data)
                console.log( data );
                } }
            />
            </div>
            
            <div id="displayContent" className="mx-4">
                
                
            </div>

            <InputLabel title="Add Image"/>
            <input type="file" accept="image/*" onChange={GetFile} id="upload-btn"/>

            <div className='w-full flex justify-center mt-4'>
                <button type='submit' value='Submit' onClick={SubmitForm} className='btn bg-app-color h-[52px] text-base px-8'> Submit </button>
                {/* p-2 bg-app-color text-white rounded-md m-4 text-center hover:tracking-widest ease-in-out duration-500' */}
            </div>
           
        </section>

        <section id='myposts' className='mx-4 shadow-lg p-4 mt-12 overflow-x-scroll'>
            <h2 className='text-text-color font-bold text-lg mb-2'>My Posts</h2>
            <table className='px-4 lg:w-full'>
                <thead className='text-theme-color bg-text-color  font-bold text-base lg:w-fit items-left justify-left px-4'>
                    <tr> 
                        <TableHeaderCell headerText="S/N" />
                        <TableHeaderCell headerText="Title" />
                        <TableHeaderCell headerText="Category" />
                        <TableHeaderCell headerText="Sub Category" />
                        <TableHeaderCell headerText="Body" />
                        {/* <TableHeaderCell headerText="Likes" /> */}
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
                                // likes={dataItem.likes}
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