import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-list-current-user.css';
import {Link} from 'react-router-dom';

import { getPosts, setCurrentPostId } from "../../../redux/posts/actions";




const PostListCurrentUser = ({match}) => {
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const currentUser = useSelector(state => state.usersReducer.currentUser);
  const currentPostId = useSelector(state => state.postsReducer.currentPostId);

  const dispatch = useDispatch();

  useEffect(() => { 
      dispatch(getPosts(match.params.userId));
  }, [dispatch, match]);

  console.log(match.params.userId);


  return (
    <div className="col-md-6">
      <div className="post-list post-group">
        {posts.map(post => 
        <div className={`list-group-item ${( currentPostId !== null && post.id === currentPostId) ? "active" : ""}`}
            key={post.id}
            onClick={() => dispatch(setCurrentPostId(post.id))}
            >
          <p className='post-list title'>{post.title}</p> {post.id}
          <p>{post.body}</p>
          <Link to={`comments/${post.id}`}>Посмотреть комментарии</Link>
        </div>
        )}   
      </div>
    </div>
  )
}


export { PostListCurrentUser };




