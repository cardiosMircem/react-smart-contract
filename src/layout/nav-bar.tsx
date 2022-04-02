import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="bsc">BSC</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
