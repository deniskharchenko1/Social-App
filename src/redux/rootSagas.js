// import {all} from 'redux-saga';
// import {Effect} from 'redux-saga';
import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_USERS, GET_POSTS, GET_COMMENTS } from './types';
import {getUsersSaga} from './users/sagas';
import {getPostsSaga} from './posts/sagas';
import {getCommentsSaga} from './comments/sagas';

// const sagas: Array<Effect> = [];

export function* watchSagas() {
   yield takeEvery(GET_USERS, getUsersSaga)
   yield takeEvery(GET_POSTS, getPostsSaga)
   yield takeEvery(GET_COMMENTS, getCommentsSaga)
}
