import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

  const handleMarkAsRead = (id,time) => {
    // console.log("time");
    setReadingTime(readingTime + time);
    // console.log("iddd", id);
    const newBookmarks = bookmarks.filter((blog) => blog.id !== id);
    setBookmarks(newBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex p-5 max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
