import { GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  SET_POST
} from './types'


export const getAllPosts = () => {
  return {
      type: GET_ALL_POSTS
  }
}
export const getAllPostsSuccess = (data) => {
  return {
      type: GET_ALL_POSTS_SUCCESS,
      payload: data
  }
}
export const getAllPostsError = (error) => {
  return {
      type: GET_ALL_POSTS_ERROR,
      payload: error
  }
}



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

export const setCurrentPostId = (id) => {
  return {
      type: SET_POST,
      payload: id
  }
}



