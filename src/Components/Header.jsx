import React from "react";
import Mafia from "./Mafia";

function Header() {
  return (
    <div id="main">
      <Mafia />
      <div className="name">
        <h1><span>Your First Creative Page</span>      In Your Life</h1>
        <p className="details" > Aille Best Development Team and Servises !</p>
        <a href="0" className="cv-btn">Download</a>
      </div>
    </div>
  );
}

export default Header;
