import Nav from "./Nav.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MainNavigation({ isTransparent }) {
  const [openMenu, setIsOpenMenu] = useState(false);

  function handleClick() {
    setIsOpenMenu((prevState) => !prevState);
    document.body.classList.toggle("menu-open", !openMenu);
  }

  function closeMenu() {
    setIsOpenMenu(false);
    document.body.classList.remove("menu-open");
  }

  return (
    <header className={`header ${isTransparent ? "transparent-bg" : ""}`}>
      <div className="logo-div">
        <NavLink className="logo" to="/">
          <span className="text-logo">/</span>TRIO SECURITY
        </NavLink>
        <div onClick={handleClick} className="menu-icon">
          {openMenu ? (
            <ion-icon
              className="icon-mobile-nav"
              name="close-outline"
            ></ion-icon>
          ) : (
            <ion-icon
              className="icon-mobile-nav"
              name="menu-outline"
            ></ion-icon>
          )}
        </div>
      </div>

      <ul className="sidebar">
        <nav className={openMenu ? "navigation active" : "navigation"}>
          <li>
            <Nav close={closeMenu} navName="Home" to="/" />
          </li>
          <li>
            <Nav close={closeMenu} navName="Our Services" to="/ourservice" />
          </li>
          <li>
            <Nav
              close={closeMenu}
              navName="Industries we serve"
              to="/industries"
            />
          </li>
          <li>
            <Nav close={closeMenu} navName="About Us" to="/aboutus" />
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/GetInTouch" className="btn">
              Get in Touch
            </NavLink>
          </li>
        </nav>
      </ul>
    </header>
  );
}

export default MainNavigation;
