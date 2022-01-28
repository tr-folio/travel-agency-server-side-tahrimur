import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const loginData = {
        email: '',
        password: ''
    };

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        loginData[field] = value;
    }

    const handleLogin = (event) => {
        event.preventDefault();
        window.alert("Please wait");
    }
    return (
        <div>
            <h1>Please Login</h1>
            <Container>
                <form onSubmit={handleLogin}>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="email" name="email" placeholder="Enter email addres" required/>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="password" name="password" placeholder="Create password" required/>
                    <button className="btn btn-primary rounded round-3" type="submit">Submit</button>
                </form>
                <p className="py-3">
                    <Link to="/register">Register here</Link>
                </p>
            </Container>
        </div>
    );
};

export default Login;