import React from "react";
import Image from 'next/image';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap"
import Logo from '../../public/logo.png'

const HeaderNav = () => {
  return (
      <Navbar expand="lg" className="navbar-light mx-4 sticky-top">
        <NavbarBrand style={{width: '200px'}} to="/home"><Image src={Logo} alt="PeopleChoice Agency"/></NavbarBrand>
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
              <NavLink className='text-white nav_item'
                to='/'
              >
                Services
              </NavLink>
              <NavLink className='text-white nav_item'
                to='/'
              >
                Blogs
              </NavLink>
              <NavLink className='text-white nav_item'
                to='/'
              >
                About
              </NavLink>
              <NavLink className='text-white nav_item'
                to='/'
              >
                Contact Us
              </NavLink>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default HeaderNav;