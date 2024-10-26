import { NavLink } from "react-router-dom";

function Nav({ close, navName, to }) {
  return (
    <NavLink
      to={to}
      className="nav-link"
      activeClassName="active" // Adds 'active' class when the route matches
      onClick={close}
    >
      {navName}
    </NavLink>
  );
}

export default Nav;
