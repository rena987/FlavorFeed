// FavoritesContext.js
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (item) => {
    setFavorites((currentFavorites) => [
      ...currentFavorites,
      { id: String(currentFavorites.length + 1), title: item.title }, // Ensure the id is unique.
    ]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
