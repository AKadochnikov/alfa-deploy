import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import {artistsApi} from '../services/artists-api/artists-api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artistsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
