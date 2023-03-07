import React, { useState } from 'react'
import author from '../assets/author.jfif'
import startup from '../assets/st.png'
import Image from '../assets/img2.jpg'
import { useLocation } from 'react-router-dom'
import  { AiOutlineLike}  from 'react-icons/ai'
import { useContext } from 'react'
import { BlockBlogContext } from '../context/BlockBlogContext'
import {ethers} from 'ethers'

const Thoughts = () => {

    const location = useLocation()
    
    const {no, id, author_name, img,  title, cat, subcat, content,authoradr, date, likes, allcats} = location.state;
    const {BlogNetworkContract, blockAccount} = useContext(BlockBlogContext);
    const [showDialog, setShowDialog] = useState(false)
    const [loading, setLoading] = useState(false);
    const [inputAMount, setInputAmount] = useState('')
    const [inputWalletAddress, setInputWalletAdress] = useState(authoradr)


    const LikeArticle = async () => {
        try {
            await (await BlogNetworkContract.Like(id)).wait();
            window.location.reload()
            
        } catch (error) {
            alert(error)
        }
    }

    const SendEther = async() => {
        // convert ether to wei using the parseEther method
        const toWei = (eth) => ethers.utils.parseEther(eth.toString())
        if (blockAccount.length <= 0) alert("connect crypto wallet")
        if (inputAMount != '' && inputWalletAddress != '') {
            const token_amount = toWei(inputAMount)
            setLoading(true)
            try {
                await BlogNetworkContract.BuyMeCoffee(authoradr, token_amount, {value: token_amount})
                setLoading(false)
                alert(`token amount of ${inputAMount} delivered to ${inputWalletAddress}`)
            } catch (error) {
                alert(error)
                setLoading(false)
            }  
        }
        else{
            alert('input all fields')
        }
    }
        
    
  return (
    <>
    {   showDialog ? 

            <div className=' max-w-[500px] h-1/3 max-h-[500px] items-center justify-center z-100   flex rounded-lg mt-[100px] mx-auto p-4'>
                <div className='px-2 mx-2 border-[#ddd] border-[1px] w-full'>
                    <input className='p-4 my-2 h-20 border-[#ddd] border-[1px] w-full' type="text" placeholder="Input ether" onChange={(evt) => setInputAmount(evt.target.value)}/> <br />
                    <input className='p-4 my-2 h-20 border-[#ddd] border-[1px] w-full ' type="text" 
                        placeholder= {inputWalletAddress ? inputWalletAddress :'Wallet address'}
                        onChange={(evt) => setInputWalletAdress(evt.target.value)} />
                    <div className='px-4 my-4 w-full flex items-center justify-around' >
                        <button className='btn w-36 justify-center' onClick={SendEther}>{loading ? 'Sending...' : 'Send Token'}</button>
                        <button className='btn w-36 justify-center' onClick={() => setShowDialog(false)}>Cancel</button>
                    </div> 
                </div>
               
            </div>  
        : 

        <div className='px-12 py-16'>
        <div className='flex items-center gap-x-4 ml-56'>
            {/* <div className='w-16 h-16 rounded-full  overflow-hidden bg-black'>
                <img src={img} alt="" className='w-full h-full object-cover'/>
            </div> */}
                <div className='self-end flex '>
                      <h3 className='font-bold text-xl mr-8'>{author_name}</h3>
                      <p className='font-semibold'>{`${authoradr.slice(0,5)}...${authoradr.slice(authoradr.length-5, authoradr.length)}`}</p>
                </div>
         </div>
            <div className=' mx-auto mb-10'>
              
                    {/* title */}
                    <div className='text-[24px] lg:text-[64px] font-bold leading-tight mb-6 max-w-[80%] break-all'
                    // data-aos='fade-right'
                    // data-aos-delay='500'
                    >
                    {title}
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <img src={img} alt="" className='w-4'/>
                        <h2 className='font-bold'>{cat}  </h2>
                        <button className='btn p-4' onClick={()=> setShowDialog(true)}>Buy me Coffee</button>
                        {/* <div className='flex flex-row gap-2 '> 
                             <p onClick={LikeArticle}><AiOutlineLike /></p>
                            {likes}
                        </div> */}
                    </div>
            </div>
            <div className='h-[600px] w-full mb-6'>
                <img src={img} alt="" className='h-full w-full'/>
            </div>
            <div dangerouslySetInnerHTML={{__html: content}}>
                
            </div>
    </div>
    }
    </>
 
  )
}

export default Thoughts
