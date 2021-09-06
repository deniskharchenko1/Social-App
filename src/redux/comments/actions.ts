import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from "./types";
import {
  GetCommentsActionType,
  GetCommentsSuccessActionType,
  GetCommentsErrorActionType,
} from "./type";

export const getComments = (postId: any): GetCommentsActionType => {
  return {
    type: GET_COMMENTS,
    payload: postId,
  };
};

export function getCommentsSuccess(data: any): GetCommentsSuccessActionType {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: data,
  };
}

export function getCommentsError(error: any): GetCommentsErrorActionType {
  return {
    type: GET_COMMENTS_ERROR,
    payload: error,
  };
}
