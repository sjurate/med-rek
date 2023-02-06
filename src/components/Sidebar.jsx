import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "./NavBtn";
import NavBtnClose from "./NavBtnClose";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  console.log(showNav);

  return (
    <>
      <div className="sidebar" id={showNav ? "isVisible" : ""}>
        <div className="menu">Meniu</div>
        <nav className="navbar" onClick={() => setShowNav(!showNav)}>
          <NavLink className="link" to="/" end>
            Pagrindinis
          </NavLink>
          <NavLink className="link" to="/medrek/main">
            Kurti rekomendacijas
          </NavLink>
          <NavLink className="link" to="/medrek/contact">
            Kontaktai
          </NavLink>
        </nav>
      </div>
      <NavBtnClose
        className="btn--nav btn--nav-close"
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <NavBtn
        className="btn--nav btn--nav-open"
        showNav={showNav}
        setShowNav={setShowNav}
      />
    </>
  );
};

export default Sidebar;
