import React, {useContext} from 'react'
import { useLocation, Link } from 'react-router-dom'


// import Image4 from '../assets/img6.jpg'
import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img5.jpg'
import { BlockBlogContext } from '../context/BlockBlogContext'


// post card for the summary of each post
const Postcard = ({imgsrc, title, cat, date, subcat}) => {
    return (
        <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100'>
            <Link  to={ `/${item}`}>
            <div className='w-[100%] h-[300px] mx-auto '>
                <img src={imgsrc} alt="" className='w-full h-full object-cover resize-x' />
            </div>
            <div className='relative top-11 md:top-0 p-4'>
                    <p className='text-gray-500'>
                        {cat}
                    </p>
                        <h2 className='font-bold text-xl md:text-2xl'>{title}
                    </h2>
                    <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                        <p>{subcat}</p>
                        <p>{date}</p> 
                    </div>
            </div>
            </Link>

        </div>
    )
}

const Posts = () => {

    // import data passed through context
    const {allPosts, academyPosts, businessPosts, climatePosts, politicsPosts, technologyPosts} = useContext(BlockBlogContext);
    
    // get the category of data from category name passed through link
    const location = useLocation()
    const category = location.state.category;
    // const category = getcategory.name

    // console.log("category", category);
    // console.log("acamy posts => ", academyPosts);
    // console.log("bussiness post => ", businessPosts);
    // console.log("climate posts => ", climatePosts);
    // console.log("politics posts => ", politicsPosts);
    // console.log("tech posts => ", technologyPosts);
    // console.log("all posts => ", allPosts);


  return (
    <div className='px-12 mt-96 mb-72 md:mt-[500px] py-20 lg:mt-0 py-0'>
        <h3 className='font-bold py-6 lg:text-center lg:py-16 lg:text-2xl'
        //   data-aos='fade-down'
        //   data-aos-delay='300'
        >All Posts
        </h3>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-4'
        // data-aos='fade-right'
        // data-aos-delay='500'
         >
           
           {/* display data according to their category passed through link in blogposts */}

            {
                category == "Academy" &&
                academyPosts.length > 0 ? 
                academyPosts.map((item, index) =>
                    // <Postcard key={index}
                    //     imgsrc = {item.imageuri}
                    //     title = {item.title}
                    //     cat = {item.cat}
                        
                    // />
                    <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: academyPosts 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                <p>{item.subcat}</p>
                                <p>{item.date}</p>   
                            </div>
                    </div>
                    </Link>
        
                </div>
                )
            //     : <div>No Recent post on Academy</div>
            // }

            :
            
                category == "Business" &&
                businessPosts.length > 0 ? 
                businessPosts.map((item, index) =>
                    // <Postcard key={index}
                    //     imgsrc = {item.imageuri}
                    //     title = {item.title}
                    //     cat = {item.cat}
                    //     link = {item.title}
                    // />
                    <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: businessPosts 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                <p>{item.subcat}</p>
                                <p>{item.date}</p> 
                            </div>
                    </div>
                    </Link>
        
                </div>
                )
            //     : <div>No Recent post on Business </div>
            // }

            // {
                :
                category == "Climate" &&
                climatePosts.length > 0 ? 
                climatePosts.map((item, index) =>
                    // <Postcard key={index}
                    //     imgsrc = {item.imageuri}
                    //     title = {item.title}
                    //     cat = {item.cat}
                    //     link = {item.title}
                    // />
                    <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: climatePosts 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                <p>{item.subcat}</p>
                                <p>{item.date}</p>
                                
                            </div>
                    </div>
                    </Link>
        
                </div>
                )
            //     : <div>No Recent post on CLimate</div>
            // }
            :
            // {
                category == "Politics" &&
                politicsPosts.length > 0 ? 
                politicsPosts.map((item, index) =>
                    // <Postcard key={index}
                    //     imgsrc = {item.imageuri}
                    //     title = {item.title}
                    //     cat = {item.cat}
                    //     link = {item.title}
                    // />
                    
                    <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: politicsPosts 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                <p>{item.subcat}</p>
                                <p>{item.date}</p>
                            </div>
                    </div>
                    </Link>
        
                </div>
                )
            //     : <div>No Recent post on Politics</div>
            // }

            // {
                :
                category == "Technology" &&
                technologyPosts.length > 0 ? 
                technologyPosts.map((item, index) =>
                    // <Postcard key={index}
                    //     imgsrc = {item.imageuri}
                    //     title = {item.title}
                    //     cat = {item.cat}
                    //     link = {item.title}
                    // />
                    <div className='space-y-2 items-center gap-x-6 lg:block border border-gray-100' key={index}>
                    <Link  to={`/${item.title}`} 
                            state={{
                                no: index, id: item.id, author_name: item.author, img: item.imageuri, 
                                title: item.title, cat: item.cat, subcat: item.subcat, content: item.content, 
                                authoradr: item.authorsadr, date: item.date, likes: item.likes, allcat: technologyPosts 
                            }}
                    >
                    <div className='w-[100%] h-[300px] mx-auto '>
                        <img src={item.imageuri} alt="" className='w-full h-full object-cover resize-x' />
                    </div>
                    <div className='relative top-11 md:top-0 p-4'>
                            <p className='text-gray-500'>
                                {item.cat}
                            </p>
                                <h2 className='font-bold text-xl md:text-2xl'>{item.title}
                            </h2>
                            <div className='text-gray-600 flex flex-row justify-between w-[100%]'>
                                <p>{item.subcat}</p>
                                <p>{item.date}</p>  
                            </div>
                    </div>
                    </Link>
        
                </div>
                )
                :
             <div className='p-4 mx-auto w-[80%] flex items-center justify-center'>
                <p>No Recent posts</p>
             </div>
            
            
            }

            
        </div>
      
    </div>
  )
}

export default Posts
