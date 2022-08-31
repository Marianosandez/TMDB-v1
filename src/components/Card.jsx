import React from "react";
import {BsFillStarFill} from 'react-icons/bs'


const Card = function ({item}) {
  const name= item.original_title|| item.original_name
  
  return (

    <div className="film" >
      
      {item.poster_path ? (
        <img className="filmImg"
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          alt={"poster path"}
        />
        ) : (
        <img className="filmImg"
          src={"https://i.mydramalist.com/1XlL7_4c.jpg?v=1"}
          alt={"poster path"}
        />
      )}

      <div className="itemInfo">
          <h3>{name}</h3>
          <p>{item.vote_average}<BsFillStarFill style={{color:'gold'}}/></p>
      </div>

      <div className="film-overview">
        {item.release_date && <p>{`Release year: ${item.release_date.split('-').reverse().join('-')}`}</p>}
        {item.first_air_date && <p>{`First air date: ${item.first_air_date.split('-').reverse().join('-')}`}</p>}
        {<p >{item.overview}</p>}
      </div>
      
   
    </div>
  );
};

export default Card;
