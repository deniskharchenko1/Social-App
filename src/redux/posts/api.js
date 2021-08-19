export const getAllPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    return await res.json()
}

export const fetchPosts = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);  
    return await res.json()
}

