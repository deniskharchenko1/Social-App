export const getAllPosts = async () => {
    const res = await this.getResource(`https://jsonplaceholder.typicode.com/posts/`);
    return await res.json()
}

export const fetchPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    let result = [];

    for (let i = 0; i < res.length; i++)
    {
        if (res[i].userId === id)
            result.push(res[i]);
    }



    return result;
}

