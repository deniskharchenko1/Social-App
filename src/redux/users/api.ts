import { UserType } from "./type";

export async function fetchUsers(): Promise<UserType[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

export async function getPerson(id): Promise<UserType> {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await user.json();
}
