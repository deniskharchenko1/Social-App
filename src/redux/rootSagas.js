import { all } from '@redux-saga/core/effects';
import {usersSaga} from './users/sagas';
import {userSaga} from './users/sagas';
import {postsSaga} from './posts/sagas';
import {allPostsSaga} from './posts/sagas';
import {commentsSaga} from './comments/sagas';



export function* watchSagas() {
   yield all([
       usersSaga(),
       userSaga(),
       postsSaga(),
       allPostsSaga(),
       commentsSaga()
   ])
}
