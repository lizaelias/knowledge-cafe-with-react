
import { IoBookmarks } from "react-icons/io5";



import React from 'react';
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookmarks}) => {
    const {cover,title, author,author_img,posted_date,reading_time,hashtags}= blog;
 
    return (
        <div className='mt-10'>
             <img className='w-full' src={cover} alt="" />
              
              <div className='flex justify-between mt-6'>
              <div className='flex items-center gap-2'>
                 
                 <img src={author_img} alt="" />
                 <div>
                 <h2 className='text-xl font-semibold'>author :{author}</h2>
                 <p className='font-semibold'>Publish Date:{posted_date}</p>
                 </div>

             </div>
             <div>
                <span>{reading_time}min read</span><button onClick={()=>handleBookmarks(blog)} className="ml-3 mr-5 text-red-500 mt-2"><IoBookmarks></IoBookmarks></button>
             </div>
              </div>
              <h3 className='text-2xl font-bold mt-5'>{title}</h3>
              <p>
                {
                    hashtags.map((hash,inx) =><a key={inx} className='text-sm font-bold text-red-500' href=""> # {hash}</a> )
                }
              </p>

              <h1 className='text-blue-600 font-bold underline'>Mark as read</h1>


        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}

export default Blog;
