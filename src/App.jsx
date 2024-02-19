
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Headers from './components/Headers'

function App() {
 
   const [bookmarks, setBooksMarks] =useState([]);
   const [markRead ,setMarkRead]=useState(0)

   const handleBookmarks = (blog)=>{
     const newBookMarks = [...bookmarks,blog]
     setBooksMarks(newBookMarks);
   }

   const handleMarkReadingTime =(id,time)=>{
    const newTime = markRead + (+time);
    setMarkRead(newTime)
    const remainingBooks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBooksMarks(remainingBooks)
   }


  return (
    <>

      <div className='max-w-7xl mx-auto'>
      <Headers></Headers>


      <div className='flex'>
       <Blogs handleBookmarks={handleBookmarks} handleMarkReadingTime={handleMarkReadingTime}></Blogs>
       <Bookmarks bookmarks={bookmarks} markRead={markRead} ></Bookmarks>
      </div>


        
      </div>
      
    </>
  )
}

export default App
