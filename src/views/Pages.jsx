import React, { useContext } from "react";
import Searching from "../utils/Searching";
import { SearchContext } from "../context/searchContext";

const Pages = () => {
  const { searchType, setActiveSearch, searchTerm, saveSearch, savedSearch } =
    useContext(SearchContext);

  //const [current,setCurrent]=useState(1)
  const numberOfPages = savedSearch.total_pages;
  const pages = [];
  const handlePageChange = (i) => {
    // setCurrent(i)
    Searching(i, searchType, setActiveSearch, searchTerm, saveSearch);
  };

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <button
        className="pagination-btn"
        style={{ display: "inline", padding: "10px", color: "blue" }}
        key={i}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  // BOTON PREVIOUS Y NEXT
  // const previousPage=(current)=>{
  //   if(current>1){
  //   setCurrent(current-1)
  //   searching(current-1)}
  // }

  // const nextPage=(current)=>{
  //   setCurrent(current+1)
  //   searching(current+1)}

  return (
    <div className="pagination">
      {/* {current!==1 && <button onClick={()=>previousPage(current)}> prev</button>} */}
      {pages}
      {/* {current < pages.length &&<button onClick={()=>nextPage(current)}>next</button>} */}
    </div>
  );
};

export default Pages;
