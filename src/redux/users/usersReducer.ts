import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./types";
import { UserInitialStateType, UsersActions } from "./type";

const initialState: UserInitialStateType = {
  isLoading: false,
  error: "",
  fetchedUsers: [],
  currentUser: null,
};

export const usersReducer = (
  state = initialState,
  action: UsersActions
): UserInitialStateType => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, isLoading: true };
    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, fetchedUsers: action.payload };
    case GET_USERS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case GET_USER:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, currentUser: action.payload };
    case GET_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
