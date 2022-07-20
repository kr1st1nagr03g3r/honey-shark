import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Image } from "react-datocms"
import styles from "/styles/Nav.module.css"


export default function Header({ navImage }) {
  return (

    <div className={"header"}>
      <Navbar bf={"light"} expand="md" >
        <Container className={styles.navHeight}>
          <Navbar.Brand href="/" className={styles.logoBrand}>

            <Image data={navImage.responsiveImage} alt={navImage.alt} className="d-inline-block align-top" />

          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            {/* Removed className="m-auto" from Nav */}
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}
