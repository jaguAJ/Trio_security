import Nav from "./Nav.js";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function MainNavigation({ isTransparent }) {
  const [openMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [openMenu]);

  function handleClick() {
    setIsOpenMenu((prevState) => !prevState);
  }

  function closeMenu() {
    setIsOpenMenu(false);
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
