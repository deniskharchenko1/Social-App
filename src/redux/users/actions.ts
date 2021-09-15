import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./types";
import {
  GetUsersActionType,
  GetUsersSuccessActionType,
  GetUsersErrorActionType,
  GetUserActionType,
  GetUserSuccessActionType,
  GetUserErrorActionType,
  UserType,
} from "./type";

export const getUsers = (): GetUsersActionType => {
  return {
    type: GET_USERS,
  };
};
export const getUsersSuccess = (
  data: UserType[]
): GetUsersSuccessActionType => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};
export const getUsersError = (error: string): GetUsersErrorActionType => {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
};

export const getUser = (id: string): GetUserActionType => {
  return {
    type: GET_USER,
    payload: +id,
  };
};

export const getUserSuccess = (data: UserType): GetUserSuccessActionType => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserError = (error: string): GetUserErrorActionType => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};
