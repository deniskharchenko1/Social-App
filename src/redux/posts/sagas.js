import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_POSTS } from './types';
import { getPostsSuccess, getPostsError} from './actions';
import {fetchPosts} from './api';


function* getPostsSaga(action) {
    try {
        const posts = yield call(() => fetchPosts(action.payload));
             
        yield put(getPostsSuccess(posts));  
    } catch (error) { 
        yield put(getPostsError())
    }    
}

export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
 }


