import "./header.scss";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from '../../resource/logo.jpg';
import { NavLink } from "react-router-dom";

let active = {
  color: "rgb(81 200 245)",
};
let disactive = {
  color: "black"
};
const Header = (props) => {

  return (
    <div className="container">
      <header className="App-header">
        <NavLink to="/">
          <Image src={Logo} className="logo rounded"></Image>
        </NavLink>

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
        <Button className="burger-menu">|||</Button>
      </header>
    </div>
  );
}

export default Header;
