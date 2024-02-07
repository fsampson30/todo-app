import { useState } from "react"
import retrieveAllTodosForUser, { deleteTodoForUser } from "./api/TodoApiService"
import { useEffect } from "react"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodosComponent() {
            
    const [todos, setTodos] = useState([])

    const [message, setmessage] = useState(null)

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    useEffect( () => refreshTodos(),[])

    function  refreshTodos(){
        retrieveAllTodosForUser(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        deleteTodoForUser(username,id)
        .then( 
            () => {
                setmessage(`Delete successful: ${id}`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))        
    }

    function updateTodo(id){
        navigate(`/todo/${id}`)

    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }
    


    return (
        <div className="container">
            <h1>Things You Want To Do</h1>
            {message && <div className="alert alert-warning">{message}</div>}            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>            
        </div>
    )
}

export default ListTodosComponent