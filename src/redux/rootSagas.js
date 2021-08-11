import { all } from '@redux-saga/core/effects';
import {usersSaga} from './users/sagas';
import {postsSaga} from './posts/sagas';
import {commentsSaga} from './comments/sagas';



export function* watchSagas() {
   yield all([
       usersSaga,
       postsSaga,
       commentsSaga
   ])
}

// надо ли добавлять круглые скобки () к userSaga и другим