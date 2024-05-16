import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNavbar = () => {
 


  return (
 
    <div className="container">
<Navbar expand="lg" className="bg-body-tertiary">
      <Container className='w-100 justify-content-between'>
        <Navbar.Brand href="#home">
          <img className='nav_logo' src="/images/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav nav_toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#link">Products And Services</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <button className='book_now d-lg-none d-block'>Book Now</button>
          </Nav>
        </Navbar.Collapse>
        <button className='book_now d-lg-block d-none'>Book Now</button>
      </Container>

    </Navbar>
    </div>
  )
}

export default MainNavbar;
