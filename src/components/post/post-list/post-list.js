import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Spinner from '../../spinner/spinner';

import './post-list.css';

import { getPosts, setCurrentPostId } from "../../../redux/posts/actions";



//=============hooks

const PostList = () => {
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const isLoading = useSelector(state => state.postsReducer.isLoading);
  const currentUser = useSelector(state => state.usersReducer.currentUser);
  const currentPostId = useSelector(state => state.postsReducer.currentPostId);

  const dispatch = useDispatch();


  useEffect(() => {
    if (currentUser) {
      dispatch(getPosts(currentUser.id));
    } 
  }, [dispatch, currentUser]);



  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(getPosts(currentUser.id));
  //   } else {
  //     return (
  //       <div>Выберите пользователя для отображения постов</div>
  //     )
  //   }
  // }, [dispatch, currentUser]);

  // if (currentUser == null ) {
  //   return  <div>Выберите пользователя для отображения постов</div>
  // } else 


  return (currentUser == null ) ? (
    <div>Выберите пользователя для отображения постов</div>
  ) : (
    <div className="post-list post-group">
      {posts.map(post => 
      <div className="list-group-item"
          key={post.id}
          onClick={() => dispatch(setCurrentPostId(currentPostId.id))}
          >
        <p className='post-list title'>{post.title}</p> {post.id}
        <p>{post.body}</p>
      </div>
      )}   
    </div>
  )
}


export { PostList };

//=============hooks



