
import React from 'react'
import moment from 'moment/moment'

const BlogPreview = ({blog}) => {   
    const date = moment(blog.date).format("L")

    return(
        <li key={blog._id} className='blog-preview'>
            <div className='blog-preview-header'>
                <h1>{blog.title}</h1>
                <div className='blog-preview-comment'>
                    {date}    
                    {blog.comments.length > 0 ? <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM140-240q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740L720-240H140Z"/></svg>
                        {blog.comments.length}
                    </div> : null}
                </div>
            </div>
            <p>{blog.text}</p>
        </li>
    )
}


export default BlogPreview