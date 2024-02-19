import React from 'react';
import logo from '../../images/girl1.jpg'

const Headers = () => {
    return (
        <div>
             <div className='flex justify-between items-center mt-10 border-b-2 pb-2'>
           <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
           <img className='w-16' src={logo} alt="" />

           </div>
        </div>
    );
};

export default Headers;