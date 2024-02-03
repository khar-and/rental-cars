import React, { useEffect, useState } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedCars);
  }, []);

  //Видаляємо картку з Favorites + оновлюємо стан + зберігаємо оновлені дані в локал-сторідж.
  const changeFavorites = (id) => {
    // Створюємо копію масиву
    const copyFavorites = favorites.slice();
    // console.log(copyFavorites);
    // Знаходимо індекс елемента, який треба видалити
    const delIndex = copyFavorites.findIndex((el) => el.id === id);
    // Видаляємо знайдений елемент за індексом з копії масиву
    copyFavorites.splice(delIndex, 1);
    // Встановлюємо оновлений масив як новий стан компонента
    setFavorites(copyFavorites);
    // Оновлює дані у локальному сховищі
    localStorage.setItem("favorites", JSON.stringify(copyFavorites));
  };

  return (
    <>
      (
      {favorites.length > 0 &&
        favorites.map((favCar) => (
          <FavoriteItem
            key={favCar.id}
            favCar={favCar}
            changeFavorites={changeFavorites}
          />
        ))}
      )
    </>
  );
};

export default FavoriteList;
