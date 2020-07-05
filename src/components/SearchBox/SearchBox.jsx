import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, handleInput, placeholder }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder={placeholder}
        className="inputField"
        data-cy="searchInput"
      />
    </div>
  );
};

export default SearchBox;
