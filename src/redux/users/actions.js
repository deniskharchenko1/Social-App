import { GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './types'



export const getUsers = () => {
  return {
      type: GET_USERS
  }
}

export const getUsersSuccess = (data) => {
  return {
      type: GET_USERS_SUCCESS,
      payload: data
  }
}

export const getUsersError = (error) => {
  return {
      type: GET_USERS_ERROR,
      payload: error
  }
}


