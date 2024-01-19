import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}> </Route>
                    <Route path='/login' element={<LoginComponent />}> </Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}> </Route>
                    <Route path='*' element={<ErrorComponent />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('flavio')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)

    const navigate  = useNavigate()

    function handleUserNameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='flavio' && password==='123'){
            setshowSuccessMessage(true)
            setshowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setshowSuccessMessage(false)
            setshowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div> }
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {

    const {username} = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username} </h1>
            <div>
                Welcome component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>Not found</h1>
            <div>
                Apologies for the 404.
            </div>
        </div>
    )
}