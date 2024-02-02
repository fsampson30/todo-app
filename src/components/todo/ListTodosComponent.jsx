import { useState } from "react"
import retrieveAllTodosForUser, { deleteTodoForUser } from "./api/TodoApiService"
import { useEffect } from "react"

function ListTodosComponent() {
            
    const [todos, setTodos] = useState([])

    const [message, setmessage] = useState(null)

    useEffect( () => refreshTodos(),[])

    function  refreshTodos(){
        retrieveAllTodosForUser('flavio')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        deleteTodoForUser('flavio',id)
        .then( 
            () => {
                setmessage(`Delete successful: ${id}`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))        
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
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent