import { takeEvery, put, call } from "@redux-saga/core/effects";

import { GET_USERS, GET_USER } from "./types";
import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
} from "./actions";
import { fetchUsers, getPerson } from "./api";

function* getUsersSaga() {
  try {
    const users = yield call(fetchUsers);

    yield put(getUsersSuccess(users));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? error.toString()
        : "error";
    yield put(getUsersError(stringError));
  }
}

function* getUserSaga(action) {
  try {
    const user = yield call(() => getPerson(action.payload));

    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
}

export function* userSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}
