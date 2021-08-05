import { HIDE_ALERT, 
  HIDE_LOADER, 
  REQUEST_POSTS, 
  REQUEST_USERS, 
  REQUEST_COMMENTS, 
  SHOW_ALERT, 
  SHOW_LOADER,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR
} from './types'


export function showLoader() {
    return {
      type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
      type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
      dispatch({
        type: SHOW_ALERT,
        payload: text
      })
  
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }
}

export function hideAlert() {
    return {
      type: HIDE_ALERT
    }
}



export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function fetchPostsSuccess() {
  return {
      type: FETCH_POSTS_SUCCESS
  }
}

export function fetchPostsError() {
  return {
      type: FETCH_POSTS_ERROR
  }
}





export function fetchUsers() {
  return {
      type: REQUEST_USERS
  }
}

export function fetchUsersSuccess() {
  return {
      type: FETCH_USERS_SUCCESS
  }
}

export function fetchUsersError() {
  return {
      type: FETCH_USERS_ERROR
  }
}










export function fetchComments() {
  return {
      type: REQUEST_COMMENTS
  }
}

export function fetchCommentsSuccess() {
  return {
      type: FETCH_COMMENTS_SUCCESS
  }
}

export function fetchCommentsError() {
  return {
      type: FETCH_COMMENTS_ERROR
  }
}

