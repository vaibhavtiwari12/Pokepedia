import React, { useState } from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const NavBar = ({ showButtons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="p-3">
        <NavbarBrand href="/">Pokepedia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
};

export default NavBar;
