import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_POSTS, GET_ALL_POSTS } from './types';
import { getPostsSuccess, getPostsError, getAllPostsSuccess, getAllPostsError} from './actions';
import {fetchPosts, getAllPosts} from './api';


function* getAllPostsSaga() {
    try {
        const allPosts = yield call(getAllPosts);
             
        yield put(getAllPostsSuccess(allPosts));  
    } catch (error) { 
        yield put(getAllPostsError())
    }    
}

function* getPostsSaga(action) {
    try {
        const posts = yield call(() => fetchPosts(action.payload));
             
        yield put(getPostsSuccess(posts));  
    } catch (error) { 
        yield put(getPostsError())
    }    
}

export function* allPostsSaga() {
    yield takeEvery(GET_ALL_POSTS, getAllPostsSaga)
 }

export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
}





