import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_USERS, GET_USER } from './types';
import { getUsersSuccess, getUsersError} from './actions'
import {fetchUsers, getPerson} from './api'


function* getUsersSaga() {
    try {
        const users = yield call (fetchUsers);

        yield put(getUsersSuccess(users)); 
    } catch (error) {
        yield put(getUsersError())  
    }    
}


function* getUserSaga(action) {
    try {
        const user = yield call (() => getPerson(action.payload));

        yield put(getUsersSuccess(user)); 
    } catch (error) {
        yield put(getUsersError())  
    }    
}


export function* usersSaga() {
    yield takeEvery(GET_USERS, getUsersSaga)
}

export function* userSaga() {
    yield takeEvery(GET_USER, getUserSaga)
}








