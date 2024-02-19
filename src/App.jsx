
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Headers from './components/Headers'

function App() {
 
   const [bookmarks, setBooksMarks] =useState([])

   const handleBookmarks = (blog)=>{
     console.log(blog)
   }


  return (
    <>

      <div className='max-w-7xl mx-auto'>
      <Headers></Headers>


      <div className='flex'>
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
       <Bookmarks></Bookmarks>
      </div>


        
      </div>
      
    </>
  )
}

export default App
