import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLogIn = () => {
        history.push("/login")
    }
    const handleSignUp = () => {
        history.push("/register")
    }
    const handleNavbarBand = () => {
        history.push("/home")
    }

    return (
        <>
            <Navbar className="fixed-top bg-white">
                <Container>
                    <Navbar.Brand className="d-flex" href="" onClick={handleNavbarBand}>
                        <img
                            src={logo}
                            width="130"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h2 className="text-danger fw-bold">Doctors Lab</h2>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Item className="nav-item">
                            <Nav.Link>
                                <Link to="/home">Home</Link>
                                <Link to="/doctors">Doctors</Link>
                                <Link to="/contact">Contact Us</Link>
                            </Nav.Link>
                        </Nav.Item>
                        {user?.email ? <Nav.Item>
                            <span className="fw-medium ms-4">Signed in as:</span> <span className="fw-bolder green-text">{user?.displayName}</span>
                            <Button onClick={logOut} variant="danger" className="mx-3 rounded-pill px-4">Log Out</Button>
                        </Nav.Item>
                            :
                            <div className="d-flex">

                                <button onClick={handleLogIn} className="mx-3 regular-btn rounded-pill px-4">Login</button>
                                <button onClick={handleSignUp} className="regular-btn rounded-pill px-4">Sign up</button>
                            </div>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;