import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import winston from '../images/winstonicon.png'

import { withRouter } from 'react-router'

function NavBar() {
  return <Navbar expand="lg">
   
  <Navbar.Brand href="/">
  <img
        alt="Winston the Corgi, logo for Emily Kulesa's Portfolio"
        src={winston}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}Emily Kulesa</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      {/* <Nav.Link href="/contact">Contact Me</Nav.Link> */}
    </Nav>   
  </Navbar.Collapse>
</Navbar>
}

export default withRouter(NavBar)