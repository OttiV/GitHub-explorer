import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ time }) => {
  const dateInfo = time ? time : "";
  return (
    <div className="header">
      <Link to="/" className="homeLink">
        GitHub Explorer
      </Link>
      <div className="geoLocaton">
        <span>{dateInfo}</span>
      </div>
    </div>
  );
};

export default Header;
