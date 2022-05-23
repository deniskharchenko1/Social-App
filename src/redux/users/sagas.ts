import { takeEvery, put, call } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/core";

import { GET_USERS, GET_USER } from "./types";
import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
} from "./actions";
import { fetchUsers, getPerson } from "./api";
import { GetUserActionType } from "./type";

function* getUsersSaga(): SagaIterator {
  try {
    const users = yield call(fetchUsers);
    yield put(getUsersSuccess(users));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? String(error)
        : "error";
    yield put(getUsersError(stringError));
  }
}

function* getUserSaga(action: GetUserActionType): SagaIterator {
  try {
    const user = yield call(() => getPerson(action.payload));

    yield put(getUserSuccess(user));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? String(error)
        : "error";
    yield put(getUserError(stringError));
  }
}

export const usersSaga = [
  takeEvery(GET_USERS, getUsersSaga),
  takeEvery(GET_USER, getUserSaga),
];
