import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingContainer">
      Serach by
      <div className="buttonContainer">
        <Link to="/repos" className="backButton" data-cy="repo-button">
          Repo
        </Link>
        <Link to="/users" className="backButton" data-cy="user-button">
          User
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
