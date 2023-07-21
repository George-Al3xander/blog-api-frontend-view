import React from 'react'
import moment from 'moment/moment'

const Comment = ({comment}) => {
    const date = moment(comment.date).format("D MMM, YYYY")
    return(<div className='comment'>
        <p>{comment.text}</p>
        <div><h2>{comment.username}</h2> <h2>{date}</h2></div>
    </div>)
}

export default Comment