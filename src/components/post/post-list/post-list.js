import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Spinner from '../../spinner/spinner';

import './post-list.css';

import { getPosts } from "../../../redux/posts/actions";



//=============hooks

const PostList = () => {
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const isLoading = useSelector(state => state.postsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (isLoading) ? (
    <Spinner/>
  ) : (
    <div className="post-list post-group">
      {posts.map(post => 
      <div className="list-group-item"
          key={post.id}>
        <p className='post-list title'>{post.title}</p> {post.id}
        <p>{post.body}</p>
      </div>
      )}
      
    </div>
  )
}


export { PostList };

//=============hooks



