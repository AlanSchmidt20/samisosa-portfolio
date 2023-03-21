import React from "react";
import ImageLogo from "./ImageLogo";

import NavBar from "./Navbar";
import "./Header.css";

const Header = () => (
  <div className="header--container">
    <ImageLogo />
    <NavBar />
  </div>
);
export default Header;
