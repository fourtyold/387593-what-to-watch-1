import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";

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
    />
  };

  return WithActiveGenre;

  WithActiveGenre.propTypes = {
    filterHandler: PropTypes.func.isRequired,
    currentGenre: PropTypes.string.isRequired
  };
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filterGenre: state.filterGenre,
  moviesList: state.films
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (genre) => {
    dispatch(ActionCreators.setFilterGenre(genre));
    dispatch(ActionCreators.getFilmsList(genre));
  }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveGenre
);
