import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AdaptedArtists} from '../../types/types';
import {DataState} from '../types';
import {NameSpace} from '../../const';

const initialState: DataState = {
  artists: [],
};

export const data = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    addArtists: (state, action: PayloadAction<AdaptedArtists[]>) => {
      state.artists = action.payload;
    }
  }
});


export default data.reducer;
