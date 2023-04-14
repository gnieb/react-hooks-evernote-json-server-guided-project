import React from "react";

function Search({handleSearched}) {

  function handleSearchEvent (e) {
    handleSearched(e.target.value)
  }

  return (
    <div className="filter">
      <input onChange={handleSearchEvent} id="search-bar" type="text" placeholder="Search Notes" />
    </div>
  );
}

export default Search;
