import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
   
    return (
        <div className='p-4 m-4 rounded-lg bg-slate-400'>
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;