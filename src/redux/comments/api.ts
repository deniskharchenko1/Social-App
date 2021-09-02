import { CommentType } from "./type";

export async function fetchComments(postId): Promise<CommentType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return await response.json();
}
