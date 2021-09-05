import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from "./types";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type ErrorType = {
  error: string;
};

export type GetAllPostsActionType = {
  type: typeof GET_ALL_POSTS;
};
export type GetAllPostsSuccessActionType = {
  type: typeof GET_ALL_POSTS_SUCCESS;
  payload: PostType[];
};
export type GetAllPostsErrorActionType = {
  type: typeof GET_ALL_POSTS_ERROR;
  payload: string;
};

export type GetPostsActionType = {
  type: typeof GET_POSTS;
  payload: number;
};
export type getPostsSuccessActionType = {
  type: typeof GET_POSTS_SUCCESS;
  payload: PostType[];
};
export type GetPostsErrorActionType = {
  type: typeof GET_POSTS_ERROR;
  payload: string;
};

export type PostsActions =
  | GetAllPostsActionType
  | GetAllPostsSuccessActionType
  | GetAllPostsErrorActionType
  | GetPostsActionType
  | getPostsSuccessActionType
  | GetPostsErrorActionType;

export type PostInitialStateType = {
  isLoading: boolean;
  error: string;
  fetchedAllPosts: PostType[];
};
