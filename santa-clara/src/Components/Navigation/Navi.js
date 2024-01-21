import React from 'react';
import { Link } from "wouter";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../Images/logo  fsantaclara.png'

const Navi = () => {

  return (
    <Navbar className='nav-container'  expand="lg">
  
      <Navbar.Brand href="#">
      <img
            src= {logo}  // Replace with the path to your logo image
            alt="Logo"
            height="30"
            className="nav-logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Link href="/"><Nav.Link href="#">HOME</Nav.Link></Link>
          <Link href="/tranparencia"><Nav.Link href="#">TRANSPARENCIA</Nav.Link></Link>
          <Link href="/proyectos"><Nav.Link href="#">PROYECTOS</Nav.Link></Link>
          <NavDropdown title="QUIÉNES SOMOS " className="nav-dropdown">
            <NavDropdown.Item className='dd-list' href="#">LA FUNDACIÓN</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="#">OBJECTIVOS</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="#">EQUIPO TÉCNICO</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown title="¿QUIERES PARTICIPAR?" className="nav-dropdown">
            <NavDropdown.Item className='dd-list' href="#">DONAR</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="#">VOLUNTARIOS</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="#">TIENDA SOLIDARIA</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">CONTACTO</Nav.Link>
          <Button variant="success" className="ml-lg-2">DONAR</Button>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
);
};

export default Navi;
