import { combineReducers } from "redux";

import {usersReducer} from './users/usersReducer';
import {postsReducer} from './posts/postsReducer';
import {commentsReducer} from './comments/commentsReducer';
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer,
    appReducer
}) 