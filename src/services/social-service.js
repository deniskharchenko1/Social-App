const apiBase = 'https://jsonplaceholder.typicode.com';


const getResource = async (url) => {
    const res = await fetch(`${apiBase}${url}`);

    if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json();
}

const getAllPeople = async () => {
    const res = await this.getResource(`/users/`);
    return res;
}
    

const getPerson = async (id) => {
    const users = await this.getResource(`/users/${id}/`);
    return this._transformPerson(users); 
}


const getAllPosts = async () => {
    const res = await this.getResource(`/posts/`);
    return res;
}

const getPostsUserId = async (id) => {
    const res = await this.getResource(`/posts/`);
    let result = [];
    for (let i = 0; i < res.length; i++)
    {
        if (res[i].userId === id)
            result.push(res[i]);
    }
    return result;
}

const getCommentsPostId = async (id) => {
        
    const res = await this.getResource(`/comments/`);
    let result = [];
    for (let i = 0; i < res.length; i++)
    {
        if (res[i].postId === id)
            result.push(res[i]);
    }
    return result;
}

export {
    getResource,
    getAllPeople,
    getPerson,
    getAllPosts,
    getPostsUserId,
    getCommentsPostId
};











export default class SocialapiService {

    _apiBase = 'https://jsonplaceholder.typicode.com';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/users/`);
        return res;
    }
        

    async getPerson(id) {
        const users = await this.getResource(`/users/${id}/`);
        return this._transformPerson(users);
        
    }

    async getAllPosts() {
        const res = await this.getResource(`/posts/`);
        return res;
    }

    async getPostsUserId(id) {
        const res = await this.getResource(`/posts/`);
        let result = [];
        for (let i = 0; i < res.length; i++)
        {
            if (res[i].userId === id)
                result.push(res[i]);
        }
        return result;
    }
        

    async getPost(id) {
        const posts = this.getResource(`/posts/${id}/`);
        return this._transformPost(posts);
    }

    async getCommentsPostId(id) {
        
        const res = await this.getResource(`/comments/`);
        let result = [];
        for (let i = 0; i < res.length; i++)
        {
            if (res[i].postId === id)
                result.push(res[i]);
        }
        return result;
    }

    // _transformPerson = (users) => {
    //     return {
    //       id: users.id,
    //       name: users.name,
    //       email: users.email,
    //       phone: users.phone,
    //       website: users.website
    //     }
    //   }

    // _transformPost = (posts) => {
    //     return {
    //         id: posts.id,
    //         userId: posts.userId,
    //         title: posts.title,
    //         body: posts.body,   
    //         email: posts.email 
    //     }
    // }

    // _transformComments = (comments) => {
    //     return {
    //         id: comments.id,
    //         postId: comments.postId,
    //         name: comments.name,
    //         email: comments.email,
    //         body: comments.body
    //     }
    // }
}

// const socialapi = new SocialapiService();

// socialapi.getPerson(3).then((u) => {

//     console.log(u.name)

// })

// socialapi.getPost(4).then((p) => {

//     console.log(p.title)

// })