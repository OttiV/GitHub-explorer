import React from "react";
import "./SearchBox.css";

const SearchBox = ({ search, handleInput }) => {
  console.log(search);
  return (
    <div className="searchBox">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Enter repo title"
        className="inputField"
      />
      {/* <div className="time">It took {time}ms to load</div> */}
    </div>
  );
};

export default SearchBox;
