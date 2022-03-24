import {useState} from 'react';

export const useFavoriteHandler = () => {
  const [isViewFavorite, setIsViewFavorite] = useState(false);

  const handleViewFavorites = () => {
    setIsViewFavorite(!isViewFavorite);
  };

  return {handleViewFavorites, isViewFavorite};
};
