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
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand className="d-flex" href="" onClick={handleNavbarBand}>
                        <img
                            src={logo}
                            width="130"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h3> <span className="green-text">Doctors Lab</span> Medical Center</h3>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Item className="nav-item">
                            <Nav.Link>
                                <Link to="/home">Home</Link>
                                <Link to="/doctors">Doctors</Link>
                                <Link to="/contact">Contact Us</Link>
                            </Nav.Link>
                        </Nav.Item>
                        {user?.email ? <Navbar.Text>
                            Signed in as: <span className="fw-bold">{user?.displayName}</span>
                            <Button onClick={logOut} variant="danger" className="mx-3 rounded-pill px-4">Log Out</Button>
                        </Navbar.Text>
                            :
                            <div className="d-flex">

                                <Button onClick={handleLogIn} variant="danger" className="mx-3 rounded-pill px-4">Login</Button>
                                <Button onClick={handleSignUp} variant="danger" className="rounded-pill px-4">Sign up</Button>
                            </div>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;