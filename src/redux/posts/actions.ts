import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
} from "./types";
import {
  GetAllPostsActionType,
  GetAllPostsSuccessActionType,
  GetAllPostsErrorActionType,
  GetPostsActionType,
  getPostsSuccessActionType,
  GetPostsErrorActionType,
  PostType,
} from "./type";

export const getAllPosts = (): GetAllPostsActionType => {
  return {
    type: GET_ALL_POSTS,
  };
};
export const getAllPostsSuccess = (
  data: PostType[]
): GetAllPostsSuccessActionType => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    payload: data,
  };
};
export const getAllPostsError = (error: string): GetAllPostsErrorActionType => {
  return {
    type: GET_ALL_POSTS_ERROR,
    payload: error,
  };
};

export const getPosts = (userId: string | number): GetPostsActionType => {
  return {
    type: GET_POSTS,
    payload: userId,
  };
};
export const getPostsSuccess = (
  data: PostType[]
): getPostsSuccessActionType => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  };
};
export const getPostsError = (error: string): GetPostsErrorActionType => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
