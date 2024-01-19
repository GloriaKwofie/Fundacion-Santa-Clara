
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais"  // Replace with the path to your logo
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Title 1</Nav.Link>
            <Nav.Link href="#">Title 2</Nav.Link>
            <NavDropdown title="Dropdown 1" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Item 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Title 3</Nav.Link>
            <Nav.Link href="#">Title 4</Nav.Link>
            <Nav.Link href="#">Title 5</Nav.Link>
          </Nav>
          <Button variant="success">Donate</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default Navbar;