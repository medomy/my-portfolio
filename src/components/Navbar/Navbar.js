import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="md" sticky="top" fixed variant="dark">
                <Container>
                    <Link className="navbar-brand" to='#profile'>Medomy</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to='#profile'>Profile</Link>
                            <Link className="nav-link" to='#skills'>skills</Link>
                            <Link className="nav-link" to='#projects'>projects</Link>
                            <Link className="nav-link" to='#contactme'>contact me</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar