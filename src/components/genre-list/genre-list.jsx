import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilterGenre} from "../../reducer/filter/selectors.js";
import {getGenresList} from "../../reducer/films/selectors.js";
import {ActionCreators} from "../../reducer/filter/filter.js";

const GenreList = (props) => {
  return <ul className="catalog__genres-list">
    {props.genresArray.map((genre, i) => {
      return (<li key={`genre-${i}`} className={genre === props.activeItem ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
        <a href="#" className="catalog__genres-link" onClick={() => {
          props.onSelect(genre);
          props.filterHandler(genre);
          props.resetFilmsNumber();
        }}>{genre}</a>
      </li>);
    })}
  </ul>;
};

GenreList.propTypes = {
  genresArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterHandler: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  resetFilmsNumber: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentGenre: getFilterGenre(state),
  genresArray: getGenresList(state)
});

const mapDispatchToProps = (dispatch) => ({
  filterHandler: (genre) => {
    dispatch(ActionCreators.setFilterGenre(genre));
  }
});

export {GenreList};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
