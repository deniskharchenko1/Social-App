import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./post-list.css";
import { RouteComponentProps, match as matchThis } from "react-router";

import Spinner from "../../spinner/spinner";
import { Alert } from "../../alert/alert";
import { getAllPosts, getPosts } from "../../../redux/posts/actions";
import { PostItem } from "../post-item";
import { RootStateType } from "../../../redux/type";

type PropsType = RouteComponentProps & {
  match: matchThis<{ userId: string }>;
};

const PostList: FC<PropsType> = ({ match }) => {
  const {
    fetchedAllPosts: posts,
    isLoading,
    error,
  } = useSelector((state: RootStateType) => state.posts);

  const dispatch = useDispatch();
  const userId = match.params.userId;

  useEffect(() => {
    if (userId) {
      dispatch(getPosts(userId));
    } else {
      dispatch(getAllPosts());
    }
  }, [dispatch, userId]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="col-md-6">
        <div className="post-list post-group">
          {posts.map((post) => (
            <PostItem key={post.id} postData={post} />
          ))}
        </div>
      </div>
      {error && <Alert />}
    </>
  );
};

export { PostList };
