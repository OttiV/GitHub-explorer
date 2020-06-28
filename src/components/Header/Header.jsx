import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ latitude, longitude, getLocation, getUserTime, time }) => {
  const locationInfo = latitude && `lat: ${latitude} lng: ${longitude}`;
  const extraInfo = time ? time : locationInfo;
  return (
    <div className="header">
      <Link to="/" className="homeLink">
        GitHub Explorer
      </Link>
      <div className="geoLocaton">
        <span>{extraInfo}</span>
        <>
          {!latitude ? (
            <button onClick={getLocation}>Allow geolocation </button>
          ) : (
            <button onClick={getUserTime} disabled={!latitude}>
              Get the time
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
