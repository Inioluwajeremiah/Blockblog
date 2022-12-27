import React, { useContext, useEffect} from 'react'
import { BlockBlogContext } from '../context/BlockBlogContext';


const PostCard = ({image, title, category,subcategory, postDate, author}) => {
    return (
        <div>
            <div>
                <img src={image} alt={`${title} image`}/>
            </div>
                <p>{title}</p>
            <div className="flex flex-row justify-between">
                <p>{category}</p>
                <p>{subcategory}</p>
                <p>{postDate}</p>
                <p>{author}</p>
            </div>
            <a href="#">View more </a>

        </div>
    )
}

const HomeII = () => {
    const {allPosts} = useContext(BlockBlogContext);
  return (
    <div>
        {
            allPosts.map((dataItem, index) => {
                <PostCard key={index}
                />
                    
            })
        }
    </div>
  )
}

export default HomeII;