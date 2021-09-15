import { takeEvery, put, call } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/core";

import { GET_POSTS, GET_ALL_POSTS } from "./types";
import {
  getPostsSuccess,
  getPostsError,
  getAllPostsSuccess,
  getAllPostsError,
} from "./actions";
import { fetchPosts, getAllPosts } from "./api";
import { GetPostsActionType } from "./type";

function* getAllPostsSaga(): SagaIterator {
  try {
    const allPosts = yield call(getAllPosts);
    yield put(getAllPostsSuccess(allPosts));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? String(error)
        : "error";
    yield put(getAllPostsError(stringError));
  }
}

function* getPostsSaga(action: GetPostsActionType): SagaIterator {
  try {
    const posts = yield call(() => fetchPosts(action.payload));
    yield put(getPostsSuccess(posts));
  } catch (error) {
    const stringError =
      typeof error === "string"
        ? error
        : typeof error === "object"
        ? String(error)
        : "error";
    yield put(getPostsError(stringError));
  }
}

export const postsSaga = [
  takeEvery(GET_ALL_POSTS, getAllPostsSaga),
  takeEvery(GET_POSTS, getPostsSaga),
];
