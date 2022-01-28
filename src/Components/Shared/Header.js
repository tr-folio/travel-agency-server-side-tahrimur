import React from "react";
import { Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
    const { logout } = useFirebase();
    return (
        <Container className="py-3">
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {!localStorage.getItem("username") && <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                </Nav.Item>
                <Nav.Item>
                    {localStorage.getItem("username") && <Nav.Link style={{color: 'black', cursor: 'default'}}>{localStorage.getItem("username")}</Nav.Link>}
                </Nav.Item>
                <Nav.Item>
                    {localStorage.getItem("username") && <button className="btn btn-primary" onClick={logout}>Logout</button>}
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Header;