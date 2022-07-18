import React from "react"
import { Container, Navbar, Nav, Image } from "react-bootstrap"
import Images from '../images/index.js'


export default function Header() {
  return (
    <div className={"header"}>
      <Navbar bf={"light"} expand="md">
        <Container>
          <Navbar.Brand href="#">
          <Image width="130px" height="130" alt="hypnotic eye" src={ Images.HypnoticEye } />
          
          {/* <Image data={heroImage.responsiveImage} className="img-fluid d-block mx-auto" alt={heroImage.alt} /> */}
          
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
