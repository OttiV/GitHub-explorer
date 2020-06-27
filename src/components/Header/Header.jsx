import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ latitude, longitude, getLocation }) => {
  return (
    <div className="header">
      <Link to="/" className="homeLink">
        GitHub Explorer
      </Link>
      <div className="geoLocaton">
        <span>{latitude}</span> <span>{longitude}</span>
        <button onClick={getLocation}>Allow geolocation </button>
      </div>
    </div>
  );
};

export default Header;
