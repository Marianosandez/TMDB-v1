import axios from "axios";

const tmdbKey = "5f4cf67aa6b81c56e16cff977537cf17";
const basicURL = "https://api.themoviedb.org/3/search/";

const Searching = (
  value,
  searchType,
  setActiveSearch,
  searchTerm,
  saveSearch
) => {
  axios
    .get(
      `${basicURL}${searchType}?page=${value}&query=${searchTerm}&api_key=${tmdbKey}`
    )
    .then((res) => res.data)
    .then((result) => {
      saveSearch(result);
      setActiveSearch(true);
    });
};

export default Searching;
