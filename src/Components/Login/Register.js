import React from "react";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const registerData = {
        name: '',
        email: '',
        password: '',
        password2: ''
    };

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        registerData[field] = value;
    }

    const handleRegister = (event) => {
        event.preventDefault();
        if (registerData.password !== registerData.password2) {
            window.alert('Password did not matched');
            return;
        }
    }

    return (
        <div>
            <h1>Please Register</h1>
            <Container>
                <form onSubmit={handleRegister}>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="name" placeholder="Enter full name" required/>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="email" name="email" placeholder="Enter email addres" required/>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="password" name="password" placeholder="Create password" required/>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="password" name="confirm2" placeholder="Confirm password" required/>
                    <button className="btn btn-primary rounded round-3" type="submit">Submit</button>
                </form>
                <p className="py-3">
                    <Link to="/login">Already Registered? Please Login</Link>
                </p>
            </Container>
        </div>
    );
};

export default Register;