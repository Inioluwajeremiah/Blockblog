import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers'

// import contract and abi
import { BlockBlogAddress, BlockNetworkABI } from '../../BlockBlogContractData';

export const BlockBlogContext = React.createContext();

// check if meamask is installed on windows and if not alert user to install one 
if(!window.ethereum) alert("Install a cryptocurrency wallet to continue")

// get the blockchain provider and contract abstraction
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
const BlogNetworkContract = new ethers.Contract(BlockBlogAddress, BlockNetworkABI, signer);


export const ContextProvider = ({children}) => {
    const [blockAccount, setBlockAccount] = useState('');
    const [allPosts, getAllPosts] = useState([]);
    const [blogCount, setBlogCount] = useState(0)
    const [contextLoading, setContextLoading] = useState(false);
    const [academyPosts, setAcademyPosts] = useState([]);
    const [businessPosts, setBusinessPosts] = useState([]);
    const [climatePosts, setClimatePosts] = useState([]);
    const [politicsPosts, setPoliticsPosts] = useState([]);
    const [technologyPosts, setTechnologyPosts] = useState([]);
    const [personalPosts, setPersonalPosts] = useState([]);


    // retrieve all articles posted
    const retrievePosts = async () =>  {
       
        setContextLoading(true)
        try {
            let blogCounter =  await BlogNetworkContract.blogCounter();
            console.log("posts => ", blogCounter.toString());
            const blogCount= blogCounter.toString();
            setBlogCount(blogCount);
            console.log("blogCount => ", blogCount);

            let postArray = [];
            let academyArray = [];
            let businessArray = [];
            let climateArray = [];
            let politicsArray = [];
            let techArray = [];
            let personalArray = [];

            for (let i = 1; i <= blogCount; i++) {
                    console.log("index ", i);
                let post = await BlogNetworkContract.blogPosts(i);
                console.log("blog post => ", post);
                let postdata = {
                    id: post.id.toString(),
                    author: post.authorsName,
                    title: post.postTitle,
                    cat: post.postCategory,
                    subcat: post.postSubcategory,
                    content: post.content,
                    authorsadr: post.author,
                    imageuri: post.imageHash,
                    likes: post.likes.toString(),
                    date: new Date(post.postDate.toNumber()).toLocaleDateString()
                }
                // get all articles
                postArray.push(postdata)
                // get academy articles
                if (post.postCategory == "Academy") academyArray.push(postdata)
                // get business articles
                if (post.postCategory == "Business") businessArray.push(postdata)
                // get climate articles
                if (post.postCategory == "Climate") climateArray.push(postdata)
                // get politics articles
                if (post.postCategory == "Politics") politicsArray.push(postdata)
                // get all technology articles
                if (post.postCategory == "Technology") techArray.push(postdata)
                // get articles posted by the author
                if (post.author.toLowerCase() == blockAccount) personalArray.push(postdata);
               
              }
              setAcademyPosts(academyArray);
              setBusinessPosts(businessArray);
              setClimatePosts(climateArray);
              setPoliticsPosts(politicsArray);
              setTechnologyPosts(techArray);
              getAllPosts(postArray);
              setPersonalPosts(personalArray)
              setContextLoading(false)
            
        } catch (error) {
            alert(error) 
            setContextLoading(false) 
        }
    }

    //  connect wallet
    const connectWallet = async () => {
        // if(!window.ethereum) alert("Install a cryptocurrency wallet to continue")
        
        if (window.ethereum) {
            const getAccounts = await ethereum.request({method: 'eth_requestAccounts'});
            setBlockAccount(getAccounts[0]);
        } else {
            // MetaMask requires requesting permission to connect users accounts
            alert("Install metamask to write to BlockBlog")
            await provider.send("eth_requestAccounts", []);
        }
    }
    
    useEffect(() => {
       
        connectWallet()
        retrievePosts()
       
    }, [])
   

    
    return (
        <BlockBlogContext.Provider value={{
                connectWallet, blockAccount, BlogNetworkContract, blogCount,
                retrievePosts, allPosts, contextLoading, academyPosts, businessPosts,
                climatePosts, politicsPosts, technologyPosts, personalPosts
            }}>
            {children}
        </BlockBlogContext.Provider>
    );
}