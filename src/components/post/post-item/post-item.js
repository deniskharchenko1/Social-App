import React from 'react';

import './post-item.css';
import {Link} from 'react-router-dom';



const PostItem = ({postData}) => {
  return (
      <div className={`list-group-item`}
          key={postData.id}
      >
        <p className='post-list title'>{postData.title}</p> {postData.id}
        <p>{postData.body}</p>
        <Link to={`/comments/${postData.id}`}>Посмотреть комментарии</Link>
      </div> 
  )
}


export { PostItem };




