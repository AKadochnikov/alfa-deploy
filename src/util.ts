import {Artists} from './types/types';
import {nanoid} from 'nanoid';

export const getAdaptedArtists = (artists: Artists[]) => artists.slice().map((artist) => ({
  id: nanoid(),
  artistHref: artist.artist_href,
  artistName: artist.artist_name,
  sourceUrl: artist.source_url,
  url: artist.url,
  isFavorite: false,
}));
