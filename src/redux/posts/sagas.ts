import { takeEvery, put, call } from "@redux-saga/core/effects";

import { GET_POSTS, GET_ALL_POSTS } from "./types";
import {
  getPostsSuccess,
  getPostsError,
  getAllPostsSuccess,
  getAllPostsError,
} from "./actions";
import { fetchPosts, getAllPosts } from "./api";

function* getAllPostsSaga() {
  try {
    // @ts-ignore
    const allPosts = yield call(getAllPosts);

    yield put(getAllPostsSuccess(allPosts));
  } catch (error) {
    const stringError = typeof error === "string" ? error : "error";
    yield put(getAllPostsError(stringError));
  }
}

// @ts-ignore
function* getPostsSaga(action) {
  try {
    // @ts-ignore
    const posts = yield call(() => fetchPosts(action.payload));

    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

export function* allPostsSaga() {
  yield takeEvery(GET_ALL_POSTS, getAllPostsSaga);
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}
