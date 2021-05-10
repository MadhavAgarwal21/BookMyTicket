import react, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { useAuth } from "../contexts/AuthContext"

import { Alert } from "react-bootstrap"
import { LocalDiningOutlined } from '@material-ui/icons';

const Navigation = () => {

    const logout = useAuth()

    const [error, setError] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")

            await logout()
            window.location.href = '/login'

        } catch (error) {
            setError(error.message)
        }
        window.location.href = '/login'
    };

    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signUp">Sign Up</Nav.Link>
                            <Nav.Link href="/details">User</Nav.Link>
                            <Nav.Link onClick={handleSubmit}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}

export default Navigation;