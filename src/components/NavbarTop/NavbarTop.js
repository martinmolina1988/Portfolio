import React from 'react'
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import foto from "../../assets/img/foto.jpg";
import "./NavbarTop.scss";
export default function NavbarTop() {

    return (
        <div>

            <Navbar bg="dark" expand="lg" >
                <Navbar.Brand href="#">  <img className="imagen" src={foto} alt="foto" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="links" to="/">  Sobre mi </Link>
                        <Link className="links" to="/skills">  Mis habilidades </Link>
                        <NavDropdown title="Mis proyectos" id="basic-nav-dropdown">
                            <Link className="links" to="/projects">  Twintter</Link>
                            <Link className="links" to="/sodulce">  SoDulce!</Link>

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Row>


            </Row>
            <Row>


            </Row>

        </div>
    );

}
