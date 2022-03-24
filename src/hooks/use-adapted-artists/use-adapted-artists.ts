import {useSelector, useDispatch} from 'react-redux';
import {useGetArtistsQuery} from '../../services/artists-api/artists-api';
import {useEffect} from 'react';
import {getArtists} from '../../store/data/selectors';
import {addArtists} from '../../store/data/actions';
import {getAdaptedArtists} from '../../util';

export const useAdaptedArtists = (amount: number) => {
  const artists = useSelector(getArtists);
  const dispatch = useDispatch();
  const {data, isFetching, isError} = useGetArtistsQuery(amount);

  useEffect( () => {
    if(data && Array.isArray(data.results)) {
      const adaptedArtists = getAdaptedArtists(data.results);
      dispatch(addArtists(adaptedArtists));
    }
  }, [data, dispatch]);
  return {artists, isFetching, isError};
};
