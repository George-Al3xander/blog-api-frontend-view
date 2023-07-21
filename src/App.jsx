import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Search from './components/Search'
function App() {
  
  const apiLink = "https://blog-api-backend-n9ql.onrender.com"

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      const getBlogs = async () => {
          await fetch(apiLink + "/posts")
          .then((res) => res.json())
          .then((data) => setBlogs(data.reverse()))
          .catch((err) => console.log(err))
      }
      if(!blogs.length > 0) {
          getBlogs();
      }      
  }, [blogs])

  // let valid = new RegExp(`${searchKey.toLowerCase()}`)
  //       if(searchKey == "") {
  //           setCurrentDisplay(fullDisplay);
  //       } else { 
  //           setCurrentDisplay(fullDisplay.filter((item) => {
  //               if(currentDisplayType != "artist") {
  //                   return (valid.test(item.name.toLowerCase()) == true || valid.test(item.owner.toLowerCase()) == true);
  //               } else {
  //                   return valid.test(item.name.toLowerCase()) == true
  //               }
  //           }))
  //       }
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Blogs blogs={blogs}/>}/>
        <Route path='/test' element={<h1>Hello test</h1>}/>
        <Route path='/:id' element={<Blog  blogs={blogs}/>}/>
        <Route path='/search' element={<Search blogs={blogs}/>}/>
      </Routes>      
    </div>
  )
}

export default App
