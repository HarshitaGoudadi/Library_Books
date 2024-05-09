import React from "react";
import "../Navbar/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <b>BOOKBUDDY</b>
        </div>
        <div>
          <li type="none">
            <Link to={"/home"}>Home</Link>
          </li>
        </div>
        <div>
          <li type="none">
            <Link to={"/about"}>About</Link>
          </li>
        </div>
        <div>
          <li type="none">
            <Link to={"/profile"}>Profile</Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
