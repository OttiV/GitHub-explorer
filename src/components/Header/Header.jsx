import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ time }) => {
  const orderTimeAndDate = string => {
    const timeSplit = string && string.split(" ");
    const hour = timeSplit[1];
    const dateSplit = timeSplit[0].split("-");
    const day = dateSplit[2];
    const month = dateSplit[1];
    const year = dateSplit[0];
    return `${day}-${month}-${year} ${hour}`;
  };
  const dateInfo = time ? orderTimeAndDate(time) : "";

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
