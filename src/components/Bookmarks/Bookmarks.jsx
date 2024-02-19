
import React from 'react';
import Bookmark from './Bookmark';




const Bookmarks = ({bookmarks,markRead}) => {
    return (
        <div className='md:w-1/3 mt-10 bg-slate-200 ml-10 p-4 rounded-xl'>
             <div className='bg-lime-300 px-4 py-4'>
                 <h1 className='text-2xl font-bold'>Total Reading :{markRead}</h1>
             </div>
            <h1 className='text-center text-3xl font-bold text-red-600 mt-5 mb-5'>Bookmarks :{bookmarks.length}</h1>

             {
                bookmarks.map((bookmark,inx) =><Bookmark key={inx} bookmark={bookmark}></Bookmark>)
             }
        </div>
    );
};

export default Bookmarks;