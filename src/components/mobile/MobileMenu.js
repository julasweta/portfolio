import React, { useState } from "react";
import "./mobileMenu.scss";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MobileMenu(props) {
  const active = {
    color: "rgb(81 200 245)",
    fontSize: 12
  };
  const disactive = {
    color: "black",
    fontSize: 12
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button className="burger-menu" onClick={toggleMenu}>
        |||
      </Button>
      <div className={`dropdown__menu ${isOpen ? "dropdown__menu_open" : ""}`}>
        <div className="nav">
          <NavLink
            to="/development"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Розробка
          </NavLink>

          <NavLink
            to="/support"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Підтримка
          </NavLink>

          <NavLink
            to="/portfolio"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Портфоліо
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Контакти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
