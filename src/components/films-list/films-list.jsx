import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const WrappedActiveCard = withActiveCard(FilmCard);

const FilmsList = (props) => {
  return props.films.map((film, i) => {
    return <WrappedActiveCard
      film={film}
      handlerDelay={props.handlerDelay}
      cardHeaderClickHandler={props.cardHeaderClickHandler}
      key={`film-card-${i}`}
    />;
  });
};

FilmsList.propTypes = {
  handlerDelay: PropTypes.number.isRequired,
  cardHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  })).isRequired
};

export default FilmsList;
