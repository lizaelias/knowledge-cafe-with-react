import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookmarks}) => {
   
     const [blogs, setBlogs]=useState([]);
     

     useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     }, [])

    return (
        <div className='md:w-2/3'>
           

           {
             blogs.map(blog => <Blog 
                key={blog.id}
                handleBookmarks={handleBookmarks}
                blog={blog}>
                
                </Blog>)
           }          
        </div>
    );
};

export default Blogs;
