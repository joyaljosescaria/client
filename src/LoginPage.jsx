import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const callTwitter = () => {
        window.location.href = 'http://localhost:8090/auth/twitter'
    }

    return (
        <div>
            <div className="login-container jumbotron">
                <h1>Login oauth</h1>
                <Link to="/private">Private page</Link>
                <div className="google auth">
                    <button className="btn btn-primary">Google</button>
                </div>
                <div className="twitter auth">
                    <button className="btn btn-info" onClick={callTwitter}>Twitter</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage