import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {filmList, filterHandler, currentGenre} = props;
  let genres = [{genre: `All genres`}, ...filmList].map((film) => {
    return film.genre;
  });
  genres = new Set(genres);
  genres = Array.from(genres);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (<li key={`genre-${i}`} className={genre === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a href="#" className="catalog__genres-link" onClick={() => {
            filterHandler(genre);
          }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

GenreList.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterHandler: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenreList;
