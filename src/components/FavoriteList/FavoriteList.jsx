import React, { useEffect, useState } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedCars);
  }, []);

  console.log(favorites);

  return (
    <>
      (
      {favorites.length > 0 &&
        favorites.map((favCar) => (
          <FavoriteItem key={favCar.id} favCar={favCar} />
        ))}
      )
    </>
  );
};

export default FavoriteList;
