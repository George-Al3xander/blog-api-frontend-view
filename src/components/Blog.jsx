import { useEffect, useState,  } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';


const Blog = () => {
    const apiLink = "https://blog-api-backend-n9ql.onrender.com"
    const {id} = useParams();    
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const getBlog = async () => {
            await fetch(apiLink + "/posts/" + id)
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch((err) => console.log(err))
        }
        getBlog();
        if(blog.comments != undefined) {
            setComments(blog.comments.reverse())
        }
    }, [blog])   
    
    const [comments, setComments] = useState([]);
    return(<>
    
    <div className='blog'>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
    </div>
        <div className='comments'>
            <h1>Comments</h1>
            <CommentForm id={id} />
            {blog.comments != undefined ? <ul>
              {comments.map((comment) => {
                return <Comment comment={comment} />
              })}  
            </ul> : null}
        </div>
    </>
    )
}


export default Blog