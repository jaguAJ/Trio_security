import Nav from "./Nav.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function MainNavigation({ isTransparent }) {
  const [openMenu, setIsOpenMenu] = useState(false);

  function handleClick() {
    setIsOpenMenu(!openMenu);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  return (
    <header className={`header  ${isTransparent ? "transparent-bg" : ""}`}>
      <div className="logo-div">
        <NavLink className="logo" to="/">
          <span className="text-logo">/</span>TRIO SECURITY
        </NavLink>
        <div onClick={handleClick} className="menu-icon">
          {openMenu ? (
            <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
          ) : (
            <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          )}
        </div>
      </div>

      <div>
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
              <NavLink close={closeMenu} to="/GetInTouch" className="btn">
                Get in Touch
              </NavLink>
              {/* <button
                className="p-[3px] relative"
                to="/GetInTouch"
                close={closeMenu}
              >
                <div className=" absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Get in Touch
                </div>
              </button> */}
            </li>
          </nav>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
