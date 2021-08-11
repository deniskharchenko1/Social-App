import { GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR
} from './types'



export const getComments = (postId) => {
  return {
      type: GET_COMMENTS,
      payload: postId
  }
}

export function getCommentsSuccess(data) {
  return {
      type: GET_COMMENTS_SUCCESS,
      payload: data
  }
}

export function getCommentsError(error) {
  return {
      type: GET_COMMENTS_ERROR,
      payload: error
  }
}

