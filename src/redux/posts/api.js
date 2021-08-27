export async function getAllPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return await res.json()
}

export const fetchPosts = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);  
    return await res.json()
}

