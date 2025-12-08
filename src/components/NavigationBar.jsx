import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cart } from "./CartContext"; 

function NavigationBar() {
  const { cart } = useContext(Cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React Fake Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productList">Products</Nav.Link>
            <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
          </Nav>

          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <Button variant="success">
                Cart ({cart.length})
              </Button>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
