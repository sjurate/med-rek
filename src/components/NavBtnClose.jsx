import React from "react";

const NavBtnClose = ({ showNav, setShowNav }) => {
  return (
    <div
      className="btn--nav btn--nav-close"
      id={showNav ? "btn--nav-close-show" : ""}
      onClick={() => setShowNav(!showNav)}
    >
      <i className="fa fa-times"></i>
    </div>
  );
};

export default NavBtnClose;
