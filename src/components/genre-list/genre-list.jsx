import React from "react";
import PropTypes from "prop-types";
const GenreList = (props) => {
  const {fullFilmsList, filterHandler, currentGenre} = props;
  const genres = [{genre: `All genres`}, ...fullFilmsList].map((film) => {
    return film.genre;
  });
  const genresSet = new Set(genres);
  const genresArray = Array.from(genresSet);
  return (
    <ul className="catalog__genres-list">
      {genresArray.map((genre, i) => {
        return (<li key={`genre-${i}`} className={genre === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a href="#" className="catalog__genres-link" onClick={() => {
            filterHandler(genre, fullFilmsList);
          }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

GenreList.propTypes = {
  fullFilmsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterHandler: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenreList;
