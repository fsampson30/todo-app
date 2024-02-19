import { apiClient } from "./ApiClient"


export default function retrieveAllTodosForUser(name){        
    return apiClient.get(`/users/${name}/todos`)
}

export function deleteTodoForUser(name,id){        
    return apiClient.delete(`/users/${name}/todos/${id}`)
}

export function retrieveTodo(name,id){        
    return apiClient.get(`/users/${name}/todos/${id}`)
}

export function updateTodo(name,id, todo){        
    return apiClient.put(`/users/${name}/todos/${id}`,todo)
}

export function createTodo(name,todo){        
    return apiClient.post(`/users/${name}/todos`,todo)
}
