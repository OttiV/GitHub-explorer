import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, handleInput, time }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Enter repo title"
        className="inputField"
      />
      <div className="time">Time to load: {time}ms</div>
    </div>
  );
};

export default SearchBox;
