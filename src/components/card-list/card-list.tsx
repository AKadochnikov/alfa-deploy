import {useAdaptedArtists} from '../../hooks/use-adapted-artists/use-adapted-artists';
import {CURRENT_AMOUNT} from '../../const';
import Loading from '../loading/loading';
import Card from '../card/card';

type CardListProps = {
  isViewFavorites: boolean,
}

function CardList (props: CardListProps):JSX.Element {
  const {isViewFavorites} = props;
  const {artists, isFetching} = useAdaptedArtists(CURRENT_AMOUNT);
  const filteredArtists = artists.slice().filter((item) => item.isFavorite);

  if (isFetching) {
    return (<Loading/>);
  }
  return (
    <section className="cards">
      <h2 className="visually-hidden">Карточки с информацией артистов</h2>
      {isViewFavorites? filteredArtists.map((artist) => <Card key={artist.id} artist={artist}/>) : artists.map((artist) => <Card key={artist.id} artist={artist}/>)}
    </section>
  );
}

export default CardList;
