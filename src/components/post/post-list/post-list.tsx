import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./post-list.css";
import { RouteComponentProps } from "react-router";

import Spinner from "../../spinner/spinner";
import { Alert } from "../../alert/alert";
import { getAllPosts, getPosts } from "../../../redux/posts/actions";
import { PostItem } from "../post-item";
// import RootStoreType from "../../app";

export type PropType = RouteComponentProps;

const PostList: FC<PropType> = (props) => {
  const posts = useSelector((state) => state.postsReducer.fetchedAllPosts);
  const isLoading = useSelector((state) => state.postsReducer.isLoading);
  const error = useSelector((state) => state.postsReducer.error);

  const dispatch = useDispatch();
  const userId = props.match.params.userId;

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
