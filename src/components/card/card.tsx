import {AdaptedArtists} from '../../types/types';
import {useCardHandlers} from '../../hooks/use-card-handlers/use-card-handlers';

type CardProps = {
    artist: AdaptedArtists,
}

function Card (props: CardProps):JSX.Element {
  const {artist} = props;
  const {artistName, artistHref, url, sourceUrl, isFavorite, id} = artist;
  const {handleClickFavoriteButton, handleClickDeleteButton} = useCardHandlers(id);

  return (
    <div className="card">
      <a className="card-link" href={artistHref}>
        <img className="card-image" src={url} width={267} height={368} alt="Аватарка артиста"/>
      </a>
      <h3 className="card-artist-name">{artistName}</h3>
      <div className="buttons-container">
        <a className="button" href={sourceUrl}>Подробнее</a>
        <button onClick={handleClickFavoriteButton} className="button button-add-favorite" type="button">
          <svg className={`favorite-icon ${isFavorite? 'active-favorite-icon' : ''}`} width="19" height="17" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
          </svg>
        </button>
      </div>
      <button onClick={handleClickDeleteButton} className="button button-delete" type="button">Удалить</button>
    </div>
  );
}

export default Card;
