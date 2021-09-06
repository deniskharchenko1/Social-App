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
    // @ts-ignore
    const users = yield call(fetchUsers);

    yield put(getUsersSuccess(users));
  } catch (error) {
    const stringError = typeof error === "string" ? error : "error";
    yield put(getUsersError(stringError));
  }
}

function* getUserSaga(action: any) {
  try {
    // @ts-ignore
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
