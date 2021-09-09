import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from "./types";
import {
  GetCommentsActionType,
  GetCommentsSuccessActionType,
  GetCommentsErrorActionType,
  CommentType,
} from "./type";

export const getComments = (postId: number | string): GetCommentsActionType => {
  return {
    type: GET_COMMENTS,
    payload: postId,
  };
};

export function getCommentsSuccess(
  data: CommentType[]
): GetCommentsSuccessActionType {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: data,
  };
}

export function getCommentsError(error: string): GetCommentsErrorActionType {
  return {
    type: GET_COMMENTS_ERROR,
    payload: error,
  };
}
