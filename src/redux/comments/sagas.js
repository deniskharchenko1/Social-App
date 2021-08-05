import { takeEvery, put, call } from '@redux-saga/core/effects';
import {GET_COMMENTS} from './types';
import {getComments, getCommentsSuccess, getCommentsError} from './actions'


export function* watchSagas() {
   yield takeEvery(GET_COMMENTS, getCommentsSaga)
}


function* getCommentsSaga() {
    try {
        const comments = yield call(getComments)
        yield put(getCommentsSuccess(comments))
        
    } catch (error) {
        yield put(getCommentsError())
    }    
}


// async function fetchComments() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
//     return await response.json()
// }