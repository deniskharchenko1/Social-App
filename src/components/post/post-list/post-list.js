import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-list.css';

import { getPosts, setCurrentPostId } from "../../../redux/posts/actions";




const PostList = () => {
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const currentUser = useSelector(state => state.usersReducer.currentUser);
  const currentPostId = useSelector(state => state.postsReducer.currentPostId);

  const dispatch = useDispatch();


  useEffect(() => {
    if (currentUser) {
      dispatch(getPosts(currentUser.id));
    } 
  }, [dispatch, currentUser]);


  return (currentUser == null ) ? (
    <div>Выберите пользователя для отображения постов</div>
  ) : (
    <div className="col-md-6">
      <div className="post-list post-group">
        {posts.map(post => 
        <div className={`list-group-item ${( currentPostId !== null && post.id === currentPostId) ? "active" : ""}`}
            key={post.id}
            onClick={() => dispatch(setCurrentPostId(post.id))}
            >
          <p className='post-list title'>{post.title}</p> {post.id}
          <p>{post.body}</p>
        </div>
        )}   
      </div>
    </div>
  )
}


export { PostList };




