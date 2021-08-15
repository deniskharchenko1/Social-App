import { all } from '@redux-saga/core/effects';
import {usersSaga, userSaga} from './users/sagas';
import {postsSaga} from './posts/sagas';
import {commentsSaga} from './comments/sagas';



export function* watchSagas() {
   yield all([
       usersSaga(),
       userSaga(),

       postsSaga(),
       commentsSaga()
   ])
}
