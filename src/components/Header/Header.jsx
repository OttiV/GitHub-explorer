import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ time }) => {
  const dateInfo = time ? time : "";
  return (
    <div className="header" data-cy="header">
      <Link to="/" className="homeLink" data-cy="homeLink">
        GitHub Explorer
      </Link>
      <div className="dateInfo" data-cy="dateInfo">
        <span>{dateInfo}</span>
      </div>
    </div>
  );
};

export default Header;
