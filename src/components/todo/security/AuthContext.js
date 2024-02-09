import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    // function login(username, password){
    //     if (username === 'flavio' && password === '123') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    function login(username, password){
        
        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        
        executeBasicAuthenticationService(baToken)
        .then(response => console.log(response))
        .catch(error => console.log(error))

        setAuthenticated(false)        
    }

    function logout(){
        setAuthenticated(false)
    }
    

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}