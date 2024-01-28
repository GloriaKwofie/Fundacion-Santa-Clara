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
            <NavDropdown.Item className='dd-list' href="/fundacion">LA FUNDACIÓN</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="/objectivos">OBJECTIVOS</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="/equipo">EQUIPO TÉCNICO</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown title="¿QUIERES PARTICIPAR?" className="nav-dropdown">
            <NavDropdown.Item className='dd-list' href="/donar">DONAR</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="/voluntarios">VOLUNTARIOS</NavDropdown.Item>
            <NavDropdown.Item className='dd-list' href="/taller">TIENDA SOLIDARIA</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contacto">CONTACTO</Nav.Link>
          <Link href="/donar"><Button variant="success" className="ml-lg-2">DONAR</Button></Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
);
};

export default Navi;
