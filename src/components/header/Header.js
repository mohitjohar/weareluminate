import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './style.scss';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar color="white" light className="main-header">
        <NavbarBrand href="/" className="mr-auto">
          <img src="img/logo.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <div className={collapsed ? 'fixed-collapse' : 'fixed-collapse show'}>
          <i
            className="fa fa-times position-absolute"
            onClick={() => setCollapsed(!collapsed)}
          ></i>
          <Nav navbar>
            <NavItem>
              <NavLink href="/faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <div className="top-space"></div>
    </>
  );
};
export default Header;
