import React from "react"
import { Container, Navbar, Nav, Image } from "react-bootstrap"

export default function Header() {
  return (
    <div className={"header"}>
      <Navbar bf={"light"} expand="md">
        <Container>
          <Navbar.Brand href="/"><Image width="130px" alt="hypnotic eye" src="https://www.datocms-assets.com/76639/1657897987-hypnotic-eye.png" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}