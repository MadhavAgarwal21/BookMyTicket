import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {

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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;