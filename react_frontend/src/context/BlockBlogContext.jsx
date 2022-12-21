import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers'
import { BlockBlogAddress, BlockNetworkABI } from '../assets/constants';

export const BlockBlogContext = React.createContext();

const getBlockBlogContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const BlogNetworkContract = new ethers.Contract(BlockBlogAddress, BlockNetworkABI, signer);
    console.log(provider, signer, BlogNetworkContract);
}

export const ContextProvider = ({children}) => {
    const [blockAccount, setBlockAccount] = useState('');
    
    const connectWallet = async () => {
        if (ethereum) {
            const getAccounts = await ethereum.request({method: 'eth_requestAccounts'});
            setBlockAccount(getAccounts[0]);
        } else {
            // MetaMask requires requesting permission to connect users accounts
            alert("Install metamask to write to BlockBlog")
        }
    }

    useEffect(() => {
        connectWallet()
    })
    
    return (
        <BlockBlogContext.Provider value={{connectWallet}}>
            {children}
        </BlockBlogContext.Provider>
    );
}