// FavoritesContext.js
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (item) => {
    setFavorites((currentFavorites) => [
      ...currentFavorites,
      { id: String(currentFavorites.length + 1), title: item.title, hall: item.hall },
    ]);
  };
  const isFavorite = (item) => favorites.some(favorite => favorite.title === item.title && favorite.hall === item.hall);
  const removeFavorite = (item) => {
    setFavorites(favorites.filter(favorite => favorite.title !== item.title || favorite.hall !== item.hall || favorite.id !== item.id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, isFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
