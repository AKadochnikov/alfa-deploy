import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ApiRoute, BASE_URL, NameSpace, Params} from '../../const';
import {Artists} from '../../types/types';

export const artistsApi = createApi({
  reducerPath: NameSpace.ArtistApi,
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getArtists: builder.query<{results: Artists[]}, number>({
      query: (amount) => ({
        url: `${ApiRoute.Neko}?${Params.Amount}${amount}`,
      })
    })
  })
});

export const {useGetArtistsQuery} = artistsApi;
