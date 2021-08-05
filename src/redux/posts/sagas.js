import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_POSTS } from './types';
import {getPosts, getPostsSuccess, getPostsError} from './actions'



export function* watchSagas() {
   yield takeEvery(GET_POSTS, getPostsSaga)
}

function* getPostsSaga() {
    try {
        const posts = yield call(getPosts);
             
        yield put(getPostsSuccess(posts));  
    } catch (error) { 
        yield put(getPostsError())
    }    
}



// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//     return await response.json()
// }
