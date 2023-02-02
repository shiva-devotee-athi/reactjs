import React, { useState, useEffect } from "react";


const data = [
  { id: 1, name: "Marco" },
  { id: 2, name: "Lincoln" },
  { id: 3, name: "Aya" }
];

export default function Kumar() {
  const [favorites, setFavorites] = useState([]);
 

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, fav: !item.fav} : item;
    });
    console.log(newFavorites ,"mew favourites");

    setFavorites(newFavorites);
  }

  return (
    <div className="App">
      <h1>Initial list</h1>
      <ul>
        {favorites.map((item, i) => (
          <li key={i}>
            {item.name}{" "}
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.fav === true ? "Remove" : "Add"}
              {/* {!item.favorite ? "add":"remove"} */}
            </button>
          </li>
        ))}
      </ul>

      <h1>Favorite list</h1>
      <ul>
        {favorites.map(item =>
          item.fav === true ? <li key={item.id}>{item.name}</li> : null
        
        )}
      </ul>
    </div>
  );
}