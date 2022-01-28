import React from "react";
import { Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <Container>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link as={HashLink} to="">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={HashLink} to="">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={HashLink} to="">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Header;