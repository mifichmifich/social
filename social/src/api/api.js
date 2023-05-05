import axios from "axios"
let instance_placeholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    }
})
export async function getUsers(limit) {
    try {
        let response = await instance_placeholder.get(`users/?_limit=${limit}`)
        return response
    } catch (error) {
        console.error(error)
    }
}