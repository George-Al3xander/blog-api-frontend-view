import { useEffect, useState } from 'react'
import React from 'react'
import BlogPreview from './BlogPreview';
import { Link } from 'react-router-dom';
const Blogs = ({blogs}) => {    
    return(
        <ul>
            {blogs.map((blog) => {
            return <Link to={"/" + blog._id}><BlogPreview blog={blog}/></Link>
            })}
        </ul>
    )
}

export default Blogs