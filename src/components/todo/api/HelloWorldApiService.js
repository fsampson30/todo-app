import { apiClient } from "./ApiClient"


export default function retrieveHelloWorldBean(name){        
    return apiClient.get(`/hello-world/path-variable/${name}`)
}



