import React from "react";

const SearchBox = ({ search, handleInput }) => {
  return (
    <>
      <input type="text" value={search} onChange={handleInput} />
    </>
  );
};

export default SearchBox;
