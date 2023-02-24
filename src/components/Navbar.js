import React from "react";
import {Link} from 'react-router-dom'
import "../css/Navbar.css";
import "../images/chazz-logo.png";
import chazzLogo from "../images/chazz-logo.png";

export default function Navbar() {
  return (
      <nav>
        <ul className="navLinks">
          <li>
          <Link to="/" className="logo">
        CHAZZ
      </Link>
          </li>
          {/* <li>
            <a href="#">ABOUT</a>
          </li> */}
          <li>
            <Link to="/journey">JOURNEY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
  );
}
