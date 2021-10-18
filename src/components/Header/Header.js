import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLogIn = () => {
        history.push("/login")
    }
    const handleSignUp = () => {
        history.push("/register")
    }

    const handleShipping = () => {
        history.push("/shipping")
    }
    const handleNavbarBand = () => {
        history.push("/home")
    }

    return (
        <>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center" href="">
                        <img
                            src={logo}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <h3>Doctors Lab Medical Center</h3>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                            <Button variant="danger" className="mx-3 rounded-pill px-4">Log Out</Button>
                        </Navbar.Text>

                        <div className="d-flex">

                            <Button variant="danger" className="mx-3 rounded-pill px-4">Login</Button>
                            <Button variant="danger" className="rounded-pill px-4">Sign up</Button>
                        </div>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;