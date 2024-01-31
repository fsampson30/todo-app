import { useState } from "react"
import retrieveAllTodosForUser from "./api/TodoApiService"
import { useEffect } from "react"

function ListTodosComponent() {
            
    const [todos, setTodos] = useState([])

    useEffect( () => refreshTodos(),[])

    function  refreshTodos(){
        retrieveAllTodosForUser('flavio')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }
    


    return (
        <div className="container">
            <h1>Things You Want To Do</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is done?</td>
                            <td>Target Date</td>
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