import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './post-list.css';
import {Link} from 'react-router-dom';

import { getAllPosts, setCurrentPostId } from "../../../redux/posts/actions";
import {PostItem} from '../post-item';



const PostList = ({post}) => {
  return (
    <div className="col-md-6">
      <div className="post-list post-group">
        <PostItem postData={post}/>   
      </div>
    </div>
  )
}

export { PostList };




