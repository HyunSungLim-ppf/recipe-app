import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header_container">
      {/* Logo */}
      <h2>Logo</h2>
      {/* GNB */}
      <ul className="gnb">
        <li>
          <Link to="/recipe">Recipe</Link>
        </li>
        <li>
          <Link to="/">Media</Link>
        </li>
        <li>
          <Link to="/">Food Arts</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>

      {/* Search Icon */}
      {/* <div className="icon">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div> */}
    </div>
  );
};
