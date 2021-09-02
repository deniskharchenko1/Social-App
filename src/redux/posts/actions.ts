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
} from "./type";

export const getAllPosts = (): GetAllPostsActionType => {
  return {
    type: GET_ALL_POSTS,
  };
};
export const getAllPostsSuccess = (data): GetAllPostsSuccessActionType => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    payload: data,
  };
};
export const getAllPostsError = (error): GetAllPostsErrorActionType => {
  return {
    type: GET_ALL_POSTS_ERROR,
    payload: error,
  };
};

export const getPosts = (userId): GetPostsActionType => {
  return {
    type: GET_POSTS,
    payload: userId,
  };
};
export const getPostsSuccess = (data): getPostsSuccessActionType => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  };
};
export const getPostsError = (error): GetPostsErrorActionType => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
