import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers'
import { utils } from 'ethers';
// import contract and abi
import { BlockBlogAddress, BlockNetworkABI } from '../../BlockBlogContractData';

// create context
export const BlockBlogContext = React.createContext();

// check if metamask is installed on windows and if not alert user to install one 
if(!window.ethereum) alert("Install a cryptocurrency wallet to continue")

// get the blockchain provider and contract abstraction
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
const BlogNetworkContract = new ethers.Contract(BlockBlogAddress, BlockNetworkABI, signer);
// console.log(BlogNetworkContract);

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

    // console.log("Blog address => ", BlockBlogAddress);
    // retrieve all articles posted
    const retrievePosts = async () =>  {       
        setContextLoading(true)
        try {
            const blogCounter =  await BlogNetworkContract.blogCounter();
            const blogCount= blogCounter.toString();
            setBlogCount(blogCount);
            console.log("blogCount => ", blogCount.length);

            let postArray = [];
            let academyArray = [];
            let businessArray = [];
            let climateArray = [];
            let politicsArray = [];
            let techArray = [];
            let personalArray = [];

            for (let i = 1; i <= blogCount; i++) {
                console.log("index ", i);
                const post = await BlogNetworkContract.blogPosts(i);
        

                const response = await fetch(post.publication_metadata);
                const metadata = await response.json();

                console.log("blog post => ", post);
                let postdata = {
                    id: post.id,
                    title: metadata.postTitle,
                    cat: metadata.currentCategory,
                    subcat: metadata.currentSubCategory,
                    content: metadata.postContent,
                    authorsadr: metadata.walletAddress,
                    imageuri: metadata.imageHashResult,
                    date: metadata.date,
                    author: metadata.authorsname
                    // new Date(metadata.date.toNumber()).toLocaleDateString()
                }
                // get all articles
                postArray.push(postdata)
                // get academy articles
                if (metadata.currentCategory == "Academy") academyArray.push(postdata)
                // get business articles
                if (metadata.currentCategory == "Business") businessArray.push(postdata)
                // get climate articles
                if (metadata.currentCategory == "Climate") climateArray.push(postdata)
                // get politics articles
                if (metadata.currentCategory == "Politics") politicsArray.push(postdata)
                // get all technology articles
                if (metadata.currentCategory == "Technology") techArray.push(postdata)
                // get articles posted by the author
                if (metadata.walletAddress.toLowerCase() == blockAccount) personalArray.push(postdata);
               
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

