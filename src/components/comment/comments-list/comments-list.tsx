import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

import Spinner from "../../spinner/spinner";
import { Alert } from "../../alert/alert";
import "./comments-list.css";

import { getComments } from "../../../redux/comments/actions";
import { CommentsItem } from "../comments-item";

// import RootStoreType from "../../app";

export type PropType = RouteComponentProps;

const CommentsList: FC<PropType> = ({ match }) => {
  const comments = useSelector(
    (state) => state.commentsReducer.fetchedComments
  );
  const isLoading = useSelector((state) => state.commentsReducer.isLoading);
  const error = useSelector((state) => state.commentsReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(match.params.postId));
  }, [dispatch, match]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="col-md-6">
        <div className="comments-list comments-group">
          {comments.map((comment) => (
            <CommentsItem key={comment.id} commentsData={comment} />
          ))}
        </div>
      </div>
      {error && <Alert />}
    </>
  );
};

export { CommentsList };
