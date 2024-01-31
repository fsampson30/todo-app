import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export default function retrieveAllTodosForUser(name){        
    return apiClient.get(`/users/${name}/todos`)
}