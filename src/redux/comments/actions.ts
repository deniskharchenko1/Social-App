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

export const getComments = (postId): GetCommentsActionType => {
  return {
    type: GET_COMMENTS,
    payload: postId,
  };
};

export function getCommentsSuccess(data): GetCommentsSuccessActionType {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: data,
  };
}

export function getCommentsError(error): GetCommentsErrorActionType {
  return {
    type: GET_COMMENTS_ERROR,
    payload: error,
  };
}
