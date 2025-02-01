import {Nav,Navbar,Container,NavDropdown,Form,Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">
            Login
          </Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      
    </Container>
  </Navbar>
  )
}

export default NavBar