import React from "react";
import "../css/Navbar.css";
import "../images/chazz-logo.png";
import chazzLogo from "../images/chazz-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <a href="#" className="logo">
        Chazz
      </a>
      <nav>
        <ul className="navLinks">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
