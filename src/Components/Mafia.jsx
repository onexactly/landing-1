import React, { useState } from "react";
import logo from "../first-app-png/IMG_3877.PNG";

function Mafia() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav actic" : "nav"}>
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#feature">Feature</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#ui">UI SS</a>
        </li>
        <li>
          <a href="#download">Download</a>
        </li>
      </ul>
    </nav>
  );
}

export default Mafia;
