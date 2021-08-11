import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_USERS } from './types';
import { getUsersSuccess, getUsersError} from './actions'
import {fetchUsers} from './api'


function* getUsersSaga() {
    try {
        const users = yield call (fetchUsers());

        yield put(getUsersSuccess(users)); 
    } catch (error) {
        yield put(getUsersError())  
    }    
}

export function* usersSaga() {
    yield takeEvery(GET_USERS, getUsersSaga)
 }










