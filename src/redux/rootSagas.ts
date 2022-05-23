import { all, Effect } from "@redux-saga/core/effects";

import { usersSaga } from "./users/sagas";
import { postsSaga } from "./posts/sagas";
import { commentsSaga } from "./comments/sagas";

const sagas: Array<Effect> = [];

export function* watchSagas() {
  yield all(sagas.concat(usersSaga, postsSaga, commentsSaga));
}
