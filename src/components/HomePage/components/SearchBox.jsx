import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, handleInput }) => {
  return (
    <div className="searchBox">
      <input type="text" value={search} onChange={handleInput} />
    </div>
  );
};

export default SearchBox;
