import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-list.css';
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
    
    
        
  )
}


export { PostItem };




