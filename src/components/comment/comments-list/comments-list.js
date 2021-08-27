import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from "react-redux";

import Spinner from '../../spinner/spinner';

import './comments-list.css';

import { getComments } from "../../../redux/comments/actions";


const CommentsList = ({match}) => {
  const comments = useSelector(state => state.commentsReducer.fetchedComments);
  const isLoading = useSelector(state => state.commentsReducer.isLoading);
  // const currentPostId = useSelector(state => state.postsReducer.currentPostId);
  const dispatch = useDispatch();

  useEffect(() => {
     
      dispatch(getComments(match.params.postId));
      
  }, [dispatch, match]);



  return (isLoading) ? (
    <Spinner/>
  ) : (
    <div className="col-md-6">
      <div className="comments-list comments-group">
        {comments.map(comment => 
          <div className="list-group-item"
              key={comment.id}>
            <p className='comments-list title'>{comment.name}</p> {comment.id}
            <p>{comment.body}</p>
            <p className='comments-list email'>{comment.email}</p>
          </div>
          )}
      </div>
    </div>
  )
}

export { CommentsList };


