import React from "react";
import { logo, blackLogo } from "../../assets/export";
import "./Navbar.css";

function Navbar() {
  return (
      <div className="navbarContainer">
        <img src={blackLogo} alt="GDSC LOGO" className="GDSC-logo" />
        <div className="gdscLine"></div>
      </div>

  );
}

export default Navbar;
