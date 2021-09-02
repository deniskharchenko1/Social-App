import { takeEvery, put, call } from "@redux-saga/core/effects";
import { GET_COMMENTS } from "./types";
import { getCommentsSuccess, getCommentsError } from "./actions";
import { fetchComments } from "./api";

function* getCommentsSaga(action) {
  try {
    const comments = yield call(() => fetchComments(action.payload));
    yield put(getCommentsSuccess(comments));
  } catch (error) {
    yield put(getCommentsError());
  }
}

export function* commentsSaga() {
  yield takeEvery(GET_COMMENTS, getCommentsSaga);
}
