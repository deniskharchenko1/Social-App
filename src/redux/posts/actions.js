import { GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
} from './types'



export const getPosts = (userId) => {
    return {
        type: GET_POSTS,
        payload: userId
    }
}

export const getPostsSuccess = (data) => {
  return {
      type: GET_POSTS_SUCCESS,
      payload: data
  }
}

export const getPostsError = (error) => {
  return {
      type: GET_POSTS_ERROR,
      payload: error
  }
}



