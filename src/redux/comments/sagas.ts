import { takeEvery, put, call } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/core";

import { GET_COMMENTS } from "./types";
import { getCommentsSuccess, getCommentsError } from "./actions";
import { fetchComments } from "./api";

function* getCommentsSaga(action: any): SagaIterator {
  try {
    const comments = yield call(() => fetchComments(action.payload));
    yield put(getCommentsSuccess(comments));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? String(error)
        : "error";
    yield put(getCommentsError(stringError));
  }
}

export const commentsSaga = [takeEvery(GET_COMMENTS, getCommentsSaga)];
