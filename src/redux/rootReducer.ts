import { combineReducers } from "redux";

import { usersReducer } from "./users/usersReducer";
import { postsReducer } from "./posts/postsReducer";
import { commentsReducer } from "./comments/commentsReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
