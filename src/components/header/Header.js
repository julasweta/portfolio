import "./header.scss";
import Image from "react-bootstrap/Image";
import Logo from "../../resource/logo.jpg";
import { NavLink } from "react-router-dom";
import MobileMenu from "../mobile/MobileMenu";
import { useEffect, useState } from "react";

let active = {
  color: "rgb(81 200 245)",
};
let disactive = {
  color: "black",
};
const Header = (props) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleMediaChange = (e) => setIsMobile(e.matches);
    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <div className="container">
      <header className="App-header">
        <NavLink to="/">
          <Image src={Logo} className="logo rounded"></Image>
        </NavLink>

        {!isMobile && (
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
        )}

        <MobileMenu></MobileMenu>
      </header>
    </div>
  );
};

export default Header;
