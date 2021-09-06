import React from "react";
import Image from 'next/image';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"
import Logo from '../../assets/images/image01.png'

const HeaderNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-light sticky-top">
        <Container>
          <NavbarBrand to="/home"><Image src={Logo} alt="PeopleChoice Agency"/></NavbarBrand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav_toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className='text-white nav_item'
                to='/'
              >
                Home
              </NavLink>
              <NavLink className='nav_item'
                to='/'
              >
                Services
              </NavLink>
              <NavLink className='nav_item'
                to='/'
              >
                Blogs
              </NavLink>
              <NavLink className='nav_item'
                to='/'
              >
                About
              </NavLink>
              <NavLink className='nav_item'
                to='/'
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;