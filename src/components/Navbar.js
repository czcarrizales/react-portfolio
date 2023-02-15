import React from "react";
import {Link} from 'react-router-dom'
import "../css/Navbar.css";
import "../images/chazz-logo.png";
import chazzLogo from "../images/chazz-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        Chazz
      </Link>
      <nav>
        <ul className="navLinks">
          {/* <li>
            <a href="#">About</a>
          </li> */}
          {/* <li>
            <a href="#">Articles</a>
          </li> */}
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
