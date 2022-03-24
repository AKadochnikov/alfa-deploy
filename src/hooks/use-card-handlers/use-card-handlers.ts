import {useDispatch, useSelector} from 'react-redux';
import {getArtists} from '../../store/data/selectors';
import {addArtists} from '../../store/data/actions';

export const useCardHandlers = (id: string) => {
  const artists = useSelector(getArtists);
  const dispatch = useDispatch();

  const handleClickFavoriteButton = () => {
    const newArtists = artists.slice().map((item) => {
      if(item.id === id) {
        return {...item, isFavorite: !(item.isFavorite)};
      }
      return item;
    });

    dispatch(addArtists(newArtists));
  };

  const handleClickDeleteButton = () => {
    const index = artists.findIndex((item) => item.id === id);
    const result = artists.slice();
    result.splice(index, 1);

    dispatch(addArtists(result));
  };

  return{handleClickFavoriteButton, handleClickDeleteButton};
};
