import React, { useContext, useState } from "react";
import { SearchContext } from "../context/searchContext";
import Searching from "../utils/Searching";

const Search = function () {
  const {
    setSearchTerm,
    searchType,
    setSearchType,
    setActiveSearch,
    searchTerm,
    saveSearch,
    savedSearch,
  } = useContext(SearchContext);

  const [selected, setSelected] = useState(false);

  const handleSearchTerm = function (e) {
    return setSearchTerm(encodeURI(e.target.value));
  };
  const handleSearchType = function (value) {
    setSelected(!selected);
    return setSearchType(value);
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    if (typeof searchType === "object") return alert("SELECT TYPE OF SEARCH");
    setActiveSearch(true);
    Searching(1, searchType, setActiveSearch, searchTerm, saveSearch);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type={"text"}
          placeholder="Search..."
          onChange={handleSearchTerm}
        ></input>
        <p>Please select type of content before search</p>
        <button
          className="button-searchType"
          type={"button"}
          onClick={() => handleSearchType("movie")}
        >
          {" "}
          Movies
        </button>
        <button
          className="button-searchType"
          type={"button"}
          onClick={() => handleSearchType("tv")}
        >
          {" "}
          TV
        </button>
        <button className="button"> GO!</button>
      </form>
    </div>
  );
};

export default Search;
