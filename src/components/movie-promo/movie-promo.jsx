import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import PlayButton from "../play-button/play-button.jsx";
import {getPromoFilm} from "../../reducer/films/selectors.js";

const MoviePromo = (props) => {
  const {film, width, height} = props;
  return <Fragment>
    <div className="movie-card__info">
      <div className="movie-card__poster">
        <img src={film.posterImage} alt={`${film.name} poster`} width={width} height={height} />
      </div>

      <div className="movie-card__desc">
        <h2 className="movie-card__title">{film.name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{film.genre}</span>
          <span className="movie-card__year">{film.released}</span>
        </p>

        <div className="movie-card__buttons">
          <PlayButton id={film.id}/>
          <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
          </button>
        </div>
      </div>
    </div>
  </Fragment>;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getPromoFilm(state)
});

MoviePromo.propTypes = {
  film: PropTypes.shape({
    posterImage: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

MoviePromo.defaultProps = {
  width: 218,
  height: 327
};

export {MoviePromo};

export default connect(mapStateToProps)(MoviePromo);
