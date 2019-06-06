import React from "react";
import PropTypes from "prop-types";

const GenreList = (props) => {
  return <ul className="catalog__genres-list">
    {props.genresArray.map((genre, i) => {
      return (<li key={`genre-${i}`} className={genre === props.currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
        <a href="#" className="catalog__genres-link" onClick={() => {
          props.filterHandler(genre);
        }}>{genre}</a>
      </li>);
    })}
  </ul>;
};

GenreList.propTypes = {
  genresArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterHandler: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenreList;
