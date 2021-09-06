// @ts-ignore
import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, match } from "react-router";

import "./comments-list.css";
import { getComments } from "../../../redux/comments/actions";
import { CommentsItem } from "../comments-item";
import { RootStateType } from "../../../redux/type";
import Spinner from "../../spinner/spinner";
import { Alert } from "../../alert/alert";

type PropsType = RouteComponentProps & {
  match: match<{ postId: string }>;
};

// eslint-disable-next-line
const CommentsList: FC<PropsType> = ({ match }) => {
  const {
    fetchedComments: comments,
    isLoading,
    error,
  } = useSelector((state: RootStateType) => state.comments);

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
