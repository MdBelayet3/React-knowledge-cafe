import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // useState and handler use for bookmarks btn trigger 
  const [bookmarks,setBookMarks] = useState([]);

  const handleAddToButton = (blog) =>{
    // console.log('triggered the btn');
    // console.log(blog);
    const newBookMarks = [...bookmarks,blog];
    setBookMarks(newBookMarks);
  }

  // useState hook and handler for reading time handle
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (reading_time, id) =>{
    // console.log('click this btn ');
    // console.log(reading_time);
    const newReadingTime = (readingTime + reading_time)
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    console.log('remove this ',id)
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remaining);
  }

  return (
    <div className='max-w-7xl md:mx-auto mx-8 '>
      <Header></Header>
      <main className='flex md:flex-row flex-col'>
        <Blogs handleAddToButton={handleAddToButton} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
  )
}

export default App
