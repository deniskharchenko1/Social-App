import { UserInitialStateType } from "./users/type";
import { PostInitialStateType } from "./posts/type";
import { CommentInitialStateType } from "./comments/type";

export type RootStateType = {
  users: UserInitialStateType;
  posts: PostInitialStateType;
  comments: CommentInitialStateType;
};
