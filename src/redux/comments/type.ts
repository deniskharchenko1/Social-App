import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from "./types";

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};

export type GetCommentsActionType = {
  type: typeof GET_COMMENTS;
  payload: number | string;
};
export type GetCommentsSuccessActionType = {
  type: typeof GET_COMMENTS_SUCCESS;
  payload: CommentType[];
};
export type GetCommentsErrorActionType = {
  type: typeof GET_COMMENTS_ERROR;
  payload: string;
};

export type CommentsActions =
  | GetCommentsActionType
  | GetCommentsSuccessActionType
  | GetCommentsErrorActionType;

export type CommentInitialStateType = {
  isLoading: boolean;
  error: string;
  fetchedComments: CommentType[];
};
