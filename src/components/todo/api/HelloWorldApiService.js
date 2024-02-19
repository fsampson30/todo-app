import { apiClient } from "./ApiClient"


export default function retrieveHelloWorldBean(name,token){        
    return apiClient.get(`/hello-world/path-variable/${name}`,{
        headers:{
            Authorization: token
        }

    })
}

export function executeBasicAuthenticationService(token){        
    return apiClient.get(`/basicauth`,{
        headers:{
            Authorization: token 
        }
    })
}
