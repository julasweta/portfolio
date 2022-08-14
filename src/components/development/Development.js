import "./development-all.scss";
import "./development.scss";
import { NavLink, Outlet } from "react-router-dom";

let active = {
  color: "rgb(81 200 245)",
};
let disactive = {
  color: "black",
};

const Development = (props) => {
  return (
    <div className="development">
      <hr></hr>
      <ul>
        <li>
          <NavLink
            to="/development/landing"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Landing Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/development/corporate"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Corporate Site
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/development/cardsite"
            style={({ isActive }) => (isActive ? active : disactive)}
          >
            Сайт Візитка
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Development;
