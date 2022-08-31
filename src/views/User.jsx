import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContex";
import Card from "../components/Card";

const User = () => {
  const { loggedUser, saveUser } = useContext(AuthContext);
  const [myFavs, setMyFavs] = useState("");
  const findFavorites = () => {
    axios
      .get(`/favorites/${userId}`)
      .then((res) => res.data)
      .then((res) => setMyFavs(res));
  };
  const userId = loggedUser.id;
  //const info=JSON.parse(myFavs)
  // console.log(info)

  useEffect(() => {
    axios
      .get("/me")
      .then((res) => res.data)
      .then((user) => {
        saveUser(user);
      });
  }, [userId]);

  useEffect(() => findFavorites(), [userId]);

  const removeFavorite = (id) => {
    const filmId = id;
    axios
      .delete("/favorites", { data: { filmId: filmId, userId: userId } })
      .then((res) => findFavorites());
  };

  return (
    <div>
      <h2>MY INFO</h2>
      <p>{`My User ID is: ${loggedUser.id} `}</p>
      <p>{`My Email is: ${loggedUser.email} `}</p>
      <h2>MY FAVORITES</h2>
      {myFavs.length ? (
        <ul className="film-container">
          {myFavs.map((item) => {
            const data = JSON.parse(item.jsonData);
            return (
              <div key={item.id}>
                <Card item={data} key={item.id} id={item.id} />
                <button
                  className="button-favs"
                  onClick={() => removeFavorite(item.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>YOUR LIST IS EMPTY</p>
      )}
    </div>
  );
};

export default User;
