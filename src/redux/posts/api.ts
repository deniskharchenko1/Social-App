import { PostType } from "./type";

export async function getAllPosts(): Promise<PostType[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await res.json();
}

export const fetchPosts = async (userId: any): Promise<PostType[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return await res.json();
};
