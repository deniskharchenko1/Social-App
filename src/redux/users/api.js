
export async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}



export async function getPerson(id) {
    const users = await fetch(`/users/${id}/`);
    return users; 
}