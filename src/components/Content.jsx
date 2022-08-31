
import axios from "axios";
import React,{ useContext }  from "react";
import { SearchContext } from "../context/searchContext";
import { AuthContext } from "../context/authContex";
import Card from "./Card"
import Pages from "../views/Pages"




const Content = function () {
  const {savedSearch, saveSearch, tmdbKey, activeSearch}=useContext (SearchContext)
  const {loggedUser}=useContext(AuthContext)
  const userId=loggedUser.id
 if (!savedSearch.results) {axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbKey}`)
 .then((res) => res.data)
.then((result) => saveSearch(result))}

const addtoFavorite= (item)=>{
  const jsonData=JSON.stringify(item)
  axios.post('/favorites',{userId:userId, filmId:item.id, jsonData:jsonData}).then(()=>alert('SUCCESS'))
  
 }

  return (
     <div >
       { savedSearch.results? 
        <div >
            {activeSearch? <h1>SEARCH RESULT</h1>: <h1>TRENDING MOVIES</h1>}
            <div >
              <ul className="film-container">
              {savedSearch.results.map((item)=>{
                return (
                  <div key= {item.id}>
                     <Card item={item} key= {item.id} id={item.id}/>
                     {!loggedUser.id? <p>log in to add to favorites</p>:<button className="button-favs" onClick={()=>addtoFavorite(item)} >Add to favorites</button>}
                  </div>
               )})}
                </ul>
                <p>NO RESULTS</p>
            </div>
            {activeSearch && <Pages/>}
        </div> : 
            <p>LOADING</p>}
    </div>)
}

export default Content