import React from "react";

const NavBtn = ({ showNav, setShowNav }) => {
  return (
    <div
      className="btn--nav btn--nav-open"
      id={showNav ? "btn--nav-open-hidden" : ""}
      onClick={() => setShowNav(!showNav)}
    >
      <i className="fa fa-bars"></i>
    </div>
  );
};

export default NavBtn;
