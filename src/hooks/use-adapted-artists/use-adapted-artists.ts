import {useSelector, useDispatch} from 'react-redux';
import {useGetArtistsQuery} from '../../services/artists-api/artists-api';
import {useEffect} from 'react';
import {getArtists} from '../../store/data/selectors';
import {addArtists} from '../../store/data/actions';
import {getAdaptedArtists} from '../../util';
import {toast} from 'react-toastify';
import {ERROR_MESSAGE} from '../../const';

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

  useEffect(() => {
    if(isError){
      toast.error(ERROR_MESSAGE, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isError]);

  return {artists, isFetching, isError};
};
