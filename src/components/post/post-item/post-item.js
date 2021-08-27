import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-item.css';
import {Link} from 'react-router-dom';

import { getAllPosts, setCurrentPostId } from "../../../redux/posts/actions";




const PostItem = () => {
  const posts = useSelector(state => state.postsReducer.fetchedAllPosts);
  const currentPostId = useSelector(state => state.postsReducer.currentPostId);

  const dispatch = useDispatch();

  useEffect(() => { 
      dispatch(getAllPosts()); 
  }, [dispatch]);

  return (
    posts.map(post => 
      <div className={`list-group-item ${( currentPostId !== null && post.id === currentPostId) ? "active" : ""}`}
          key={post.id}
          onClick={() => dispatch(setCurrentPostId(post.id))}
          >
        <p className='post-list title'>{post.title}</p> {post.id}
        <p>{post.body}</p>
        <Link to={`comments/${post.id}`}>Посмотреть комментарии</Link>
      </div>
    )
  )

}


export { PostItem };




