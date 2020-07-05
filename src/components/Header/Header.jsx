import React from "react";
import { Link } from "react-router-dom";
import { orderTimeAndDate } from "./helpers";
import { Spinner } from "../Spinner";
import "./Header.css";

const Header = ({ time }) => {
  return (
    <div className="header" data-cy="header">
      <div className="titleAndMenu">
        <Link to="/" className="homeLink" data-cy="homeLink">
          GitHub Explorer
        </Link>
        {/* <div className="burgerMenu"></div> */}
      </div>
      <div className="dateInfo">
        {time ? (
          <span data-cy="dateInfo">{orderTimeAndDate(time)}</span>
        ) : (
          <Spinner size="small" theme="light" />
        )}
      </div>
    </div>
  );
};

export default Header;
