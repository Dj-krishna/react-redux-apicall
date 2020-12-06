import React, { useState } from 'react'
// import { button, div, label } from 'react-bootstrap'
import "./Login.css"
import { useHistory } from 'react-router';

function Loginpage(props) {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        history.push("/home")
    }

    function validateForm(){
        return userName.length > 0 && password.length >0;
    }

    return (
        <div className="Login">
            <h1>Login Here!</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group" controlId="userName">
                    <label>User Name</label>
                    <input 
                        className="form-control"
                        id="userNameInput"
                        autoFocus
                        type="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group" controlId="password">
                    <label>Password</label>
                    <input
                        className="form-control"
                        id="passwordInput"
                        autoFocus
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div><br />
                    <button class="btn btn-primary" type="submit" disabled={!validateForm()}>Login</button>    
            </form>
        </div>
    )
}


export default Loginpage