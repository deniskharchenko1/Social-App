import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./types";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};
export type ErrorType = {
  error: string;
};
// error как отдельный тип или ссылаться в InitialStateType

export type GetUsersActionType = {
  type: typeof GET_USERS;
};
export type GetUsersSuccessActionType = {
  type: typeof GET_USERS_SUCCESS;
  payload: UserType[];
};
export type GetUsersErrorActionType = {
  type: typeof GET_USERS_ERROR;
  payload: ErrorType;
};

export type GetUserActionType = {
  type: typeof GET_USER;
  payload: UserType["id"];
};
// id передавать или без него
export type GetUserSuccessActionType = {
  type: typeof GET_USER_SUCCESS;
  payload: UserType[];
};
export type GetUserErrorActionType = {
  type: typeof GET_USER_ERROR;
  payload: ErrorType;
};

export type InitialStateType = {
  isLoading: boolean;
  error: string;
  fetchedUsers: UserType[];
  currentUser: UserType | null;
};
