import React from "react";
import PropTypes from "prop-types";

import {ActionCreators} from '../../reducer.js';

const withActiveGenre = (Component) => {
  const WithActiveGenre = (props) => {
    const fullFilmsList = ActionCreators.getFilmsData();
    const genres = [{genre: `All genres`}, ...fullFilmsList].map((film) => {
      return film.genre;
    });
    const genresSet = new Set(genres);
    const genresArray = Array.from(genresSet);
    return <Component
      filterHandler={props.setFilter}
      currentGenre={props.filterGenre}
      genresArray={genresArray}
    />;
  };

  WithActiveGenre.propTypes = {
    filterGenre: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
  };

  return WithActiveGenre;
};

export default withActiveGenre;
