import React from "react";
import PropTypes from "prop-types";

import FilmCard from "../film-card/film-card.jsx";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const WrappedActiveCard = withActiveCard(FilmCard);

const FilmsList = (props) => {
  const filmsNumberLimit = props.filmsShowNumber || props.films.length;
  const renderFilmsArray = props.films.filter((film, i) => i < filmsNumberLimit && film.id !== props.id);
  return renderFilmsArray.map((film, i) => {
    return <WrappedActiveCard
      film={film}
      handlerDelay={props.handlerDelay}
      key={`film-card-${i}`}
    />;
  });
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  })).isRequired,
  id: PropTypes.number,
  filmsShowNumber: PropTypes.number
};

export default FilmsList;
