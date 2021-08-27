import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-list.css';
import Spinner from '../../spinner/spinner';

import { getAllPosts, getPosts } from "../../../redux/posts/actions";
import {PostItem} from '../post-item';



const PostList = (props) => {
  const posts = useSelector(state => state.postsReducer.fetchedAllPosts);
  const isLoading = useSelector(state => state.postsReducer.isLoading);

  const dispatch = useDispatch();
  const userId = props.match.params.userId;


  useEffect(() => { 
    if (userId) {
      dispatch(getPosts(userId));
    } else {
      dispatch(getAllPosts());
    }
  }, [dispatch, userId]);


  return (isLoading) ? (
    <Spinner/>
    ) : (
    <div className="col-md-6">
      <div className="post-list post-group">
       { posts.map(post => <PostItem  postData={post}/>)}
      </div>
    </div>
  )
}

export { PostList };




