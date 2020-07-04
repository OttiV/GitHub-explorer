import React from "react";
import { Link } from "react-router-dom";
import { orderTimeAndDate } from "./helpers";
import { Spinner } from "../Spinner";
import "./Header.css";

const Header = ({ time }) => {
  return (
    <div className="header" data-cy="header">
      <Link to="/" className="homeLink" data-cy="homeLink">
        GitHub Explorer
      </Link>
      <div className="dateInfo">
        {time ? (
          <span data-cy="dateInfo">{orderTimeAndDate(time)}</span>
        ) : (
          <Spinner small={true} light={true} />
        )}
      </div>
    </div>
  );
};

export default Header;
