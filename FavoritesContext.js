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

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
