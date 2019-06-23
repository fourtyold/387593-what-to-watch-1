import React, {Fragment} from "react";
import PropTypes from "prop-types";

import {RatingTresholds} from "../../constants.js";

const OverviewTab = (props) => {
  const {film} = props;
  let ratingLevel;
  for (let i = 0; i < RatingTresholds.length; i++) {
    if (film.rating < RatingTresholds[i].limit) {
      ratingLevel = RatingTresholds[i].value;
      break;
    }
  }

  return <Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {film.description}
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
    </div>;
  </Fragment>;
};

OverviewTab.propTypes = {
  film: PropTypes.shape({
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    scoresCount: PropTypes.number
  }).isRequired
};

export default OverviewTab;
