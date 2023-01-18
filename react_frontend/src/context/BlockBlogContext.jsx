import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers'


import { BlockBlogAddress, BlockNetworkABI } from '../../BlockBlogContractData';

export const BlockBlogContext = React.createContext();

if(!window.ethereum) alert("Install a cryptocurrency wallet to continue")

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
const BlogNetworkContract = new ethers.Contract(BlockBlogAddress, BlockNetworkABI, signer);


// const getBlockBlogContract = () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner()
//     const BlogNetworkContract = new ethers.Contract(BlockBlogAddress, BlockNetworkABI, signer);
//     console.log(provider, signer, BlogNetworkContract);
// }

export const ContextProvider = ({children}) => {
    const [blockAccount, setBlockAccount] = useState('');
    const [allPosts, getAllPosts] = useState([]);
    const [blogCount, setBlogCount] = useState(0)
    const [contextLoading, setContextLoading] = useState(false);
    // const []

    console.log(blockAccount);


    const retrievePosts = async () =>  {
        setContextLoading(true)
        try {
            let blogCounter =  await BlogNetworkContract.blogCounter();
            console.log("posts => ", blogCounter.toString());
            const blogCount= blogCounter.toString();
            setBlogCount(blogCount);
            console.log("blogCount => ", blogCount);
            let postArray = [];
            for (let i = 1; i <= blogCount; i++) {
                    console.log("index ", i);
                let post = await BlogNetworkContract.blogPosts(i);
                console.log("blog post => ", post);
                let postdata = {
                    id: post.id.toString(),
                    author: post.authorsName,
                    title: post.postTitle,
                    cat: post.postCategory,
                    subcat: post.postSubCategory,
                    content: post.content,
                    authorsadr: post.author,
                    imageuri: post.imageHash,
                    likes: post.likes.toString(),
                    date: post.postDate.toString()
                }
                postArray.push(postdata)
    
              }
              getAllPosts(postArray);
              setContextLoading(false)
            // console.log(iposts);
        } catch (error) {
            console.log(error);  
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
    // if (!window.ethereum) return (
    //     <div>"Install a cryptocurrency wallet to continue</div>
    // )

    
    return (
        <BlockBlogContext.Provider value={{connectWallet, blockAccount, BlogNetworkContract, allPosts, retrievePosts, allPosts, contextLoading }}>
            {children}
        </BlockBlogContext.Provider>
    );
}