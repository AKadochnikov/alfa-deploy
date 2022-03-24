import {RootState} from '../store';
import {NameSpace} from '../../const';

export const getArtists = (state: RootState) => state[NameSpace.Data].artists;
