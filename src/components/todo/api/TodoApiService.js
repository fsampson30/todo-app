import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export default function retrieveAllTodosForUser(name){        
    return apiClient.get(`/users/${name}/todos`)
}

export function deleteTodoForUser(name,id){        
    return apiClient.delete(`/users/${name}/todos/${id}`)
}

export function retrieveTodo(name,id){        
    return apiClient.get(`/users/${name}/todos/${id}`)
}
