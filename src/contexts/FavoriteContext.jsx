/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (resort) => {
    setFavorites((prevFavorites) => {
      const isFav = prevFavorites[resort.id];
      if (isFav) {
        const { [resort.id]: _, ...rest } = prevFavorites;
        return rest;
      }
      return { ...prevFavorites, [resort.id]: resort };
    });
  };

  const isFavorite = (id) => Boolean(favorites[id]);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoriteContext);
