import Header from '../header/header';
import Filter from '../filter/filter';
import CardList from '../card-list/card-list';
import Footer from '../footer/footer';
import {useFavoriteHandler} from '../../hooks/use-favorite-handler/use-favorite-handler';

function Main ():JSX.Element {
  const {handleViewFavorites, isViewFavorite} = useFavoriteHandler();
  return  (
    <div className="container">
      <Header/>
      <main className="main-container padding-container">
        <h1 className="visually-hidden">Тестовое задание</h1>
        <Filter onViewFavorites={handleViewFavorites}/>
        <CardList isViewFavorites={isViewFavorite}/>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
