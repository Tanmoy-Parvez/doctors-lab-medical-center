import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth(); // context api
    const history = useHistory();

    // change route options
    const handleLogIn = () => {
        history.push("/login")
    }

    const handleSignUp = () => {
        history.push("/signup")
    }

    const handleNavbarBand = () => {
        history.push("/home")
    }
    // navigation menu bar
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-white">
                <Container>
                    {/* logo and title */}
                    <Navbar.Brand className="d-flex" href="" onClick={handleNavbarBand}>
                        <img
                            src={logo}
                            width="70"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h2 className="green-text fw-bold ms-1">Doctors Lab</h2>
                    </Navbar.Brand>
                    {/* menu options */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-item">
                            <Nav.Item className="nav-item">
                                <Nav.Link>
                                    <Link to="/home">Home</Link>
                                    <Link to="/doctors">Doctors</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </Nav.Link>
                            </Nav.Item>
                            {user?.email ?
                                // toggle buttons
                                <Nav.Item>
                                    <div className="navbar-item">
                                        <span className="fw-bolder ms-3 green-text">{user.displayName}</span>
                                        <Button onClick={logOut} variant="danger" className="mx-3 rounded-pill px-4 ">Log Out <i className="fas fa-sign-out-alt"></i></Button>
                                    </div>
                                </Nav.Item>
                                :
                                <div className="d-flex">
                                    <button onClick={handleLogIn} className="mx-3 regular-btn rounded-pill px-4">Sign in</button>
                                    <button onClick={handleSignUp} className="regular-btn rounded-pill px-4">Sign up</button>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;