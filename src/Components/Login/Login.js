import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import Header from "../Shared/Header";

const Login = () => {
    const { login, user, isLoading, authError } = useFirebase();
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
        login(loginData.email, loginData.password);
    }
    return (
        <div>
            <Header/>
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
                <br/>
                <div>
                    {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
                    {user?.email && <p className="text-success">Login Successful</p>}
                    {authError && <p className="text-success">{authError}</p>}
                </div>
            </Container>
        </div>
    );
};

export default Login;