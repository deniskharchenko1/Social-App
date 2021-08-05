import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_USERS } from './types';
import {getUsers, getUsersSuccess, getUsersError} from './actions'


export function* watchSagas() {
   yield takeEvery(GET_USERS, getUsersSaga)
}


function* getUsersSaga() {
    try {
        const users = yield call (getUsers);

        yield put(getUsersSuccess(users)); // вместо payload надо что то положить
    } catch (error) {
        yield put(getUsersError())  
    }    
}


// async function fetchUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
//     return await response.json()
// }









