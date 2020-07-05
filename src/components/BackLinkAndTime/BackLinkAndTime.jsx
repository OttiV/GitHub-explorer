import React from "react";
import { Link } from "react-router-dom";
import "./BackLinkAndTime.css";
import { Spinner } from "../Spinner";

const BackLinkAndTime = ({ resetElement, time, link, timeDataCy, text }) => {
  const timeText = time ? `${time}ms` : <Spinner size="small" />;
  const linkTo = link ? `/${link}` : `/`;
  const buttonText = text ? text : "Home";

  return (
    <div className="backLinkContainer">
      <div className="backButton">
        {resetElement ? (
          <Link
            to={linkTo}
            className="backLink"
            data-cy="backButton"
            onClick={() => resetElement([])}
          >
            {buttonText}
          </Link>
        ) : (
          <Link to={linkTo} className="backLink" data-cy="backButton">
            {buttonText}
          </Link>
        )}
      </div>
      <div className="timeToLoad" data-cy={timeDataCy}>
        Time to load: {timeText}
      </div>
    </div>
  );
};

export default BackLinkAndTime;
