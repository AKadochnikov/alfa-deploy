type FilterProps = {
    onViewFavorites: () => void,
}

function Filter (props: FilterProps):JSX.Element {
  const {onViewFavorites} = props;

  return (
    <section className="filter padding-container">
      <h2 className="visually-hidden">Фильтры</h2>
      <button onMouseDown={onViewFavorites} onMouseUp={onViewFavorites} className="button filter-favorite-button" type="button">Избранное</button>
    </section>
  );
}

export default Filter;
