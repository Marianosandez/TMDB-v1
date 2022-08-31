import { createContext, useState } from "react";
import axios from "axios";

const initialState = {
  savedSearch: [],
  saveSearch: () => {},
  searching: () => {},
  searchTerm: "",
  searchType: "",
  tmdbKey: "5f4cf67aa6b81c56e16cff977537cf17",
  basicURL: "https://api.themoviedb.org/3/search/",
};

export const SearchContext = createContext(initialState);

const SearchContextProvider = ({ children }) => {
  const [savedSearch, setSavedSearch] = useState({
    savedSearch: [],
  });
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: "",
  });
  const [searchType, setSearchType] = useState({
    searchType: "",
  });
  const saveSearch = (searchResult) => {
    setSavedSearch({ savedSearch: searchResult });
  };

  const [activeSearch, setActiveSearch] = useState(false);

  const tmdbKey = "5f4cf67aa6b81c56e16cff977537cf17";
  const basicURL = "https://api.themoviedb.org/3/search/";

  //  const searching=(value,previousSearch)=>{
  //      axios
  //     .get(`${basicURL}${searchType}?page=${value}&query=${searchTerm}&api_key=${tmdbKey}`)
  //     .then((res) => res.data)
  //    .then((result) => {saveSearch(result); setActiveSearch(true)})}

  return (
    <SearchContext.Provider
      value={{
        ...savedSearch,
        saveSearch,
        searchTerm,
        setSearchTerm,
        searchType,
        setSearchType,
        tmdbKey,
        activeSearch,
        setActiveSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
