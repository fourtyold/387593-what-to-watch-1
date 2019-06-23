import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MINUTES_PER_HOUR} from "../../constants.js";

const DetailsTab = (props) => {
  const {film} = props;
  const hours = Math.floor(film.runTime / MINUTES_PER_HOUR);
  const minutes = film.runTime % MINUTES_PER_HOUR;

  return <Fragment>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">

          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{`${hours}h ${minutes}m`}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>;
  </Fragment>;
};

DetailsTab.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number
  }).isRequired
};

export default DetailsTab;
