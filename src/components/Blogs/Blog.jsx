
import { IoBookmarks } from "react-icons/io5";



import React from 'react';
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookmarks,handleMarkReadingTime}) => {
    const {id,cover,title, author,author_img,posted_date,reading_time,hashtags}= blog;
 
    return (
        <div className='mt-10 space-y-5 w-[700px] mx-auto'>
             <img className='w-full ' src={cover} alt="" />
              
              <div className='flex justify-between'>
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
              <h3 className='text-2xl font-bold'>{title}</h3>
              <p>
                {
                    hashtags.map((hash,inx) =><a key={inx} className='text-sm font-bold text-red-500' href=""> # {hash}</a> )
                }
              </p>

              <button onClick={()=>handleMarkReadingTime(id,reading_time)} className='text-blue-600 font-bold underline'>Mark as read</button>


        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}

export default Blog;
