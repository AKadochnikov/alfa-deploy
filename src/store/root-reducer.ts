import dataReducer from './data/data';
import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {artistsApi} from '../services/artists-api/artists-api';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.ArtistApi]: artistsApi.reducer,
});

