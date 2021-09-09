import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./types";

export type UserType = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export type GetUsersActionType = {
  type: typeof GET_USERS;
};
export type GetUsersSuccessActionType = {
  type: typeof GET_USERS_SUCCESS;
  payload: UserType[];
};
export type GetUsersErrorActionType = {
  type: typeof GET_USERS_ERROR;
  payload: string;
};

export type GetUserActionType = {
  type: typeof GET_USER;
  payload: number;
};

export type GetUserSuccessActionType = {
  type: typeof GET_USER_SUCCESS;
  payload: UserType;
};
export type GetUserErrorActionType = {
  type: typeof GET_USER_ERROR;
  payload: string;
};

export type UsersActions =
  | GetUsersActionType
  | GetUsersSuccessActionType
  | GetUsersErrorActionType
  | GetUserActionType
  | GetUserSuccessActionType
  | GetUserErrorActionType;

export type UserInitialStateType = {
  isLoading: boolean;
  error: string;
  fetchedUsers: UserType[];
  currentUser: UserType | null;
};
