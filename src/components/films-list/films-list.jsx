import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";

const WrappedActiveCard = withActiveCard(FilmCard);

const FilmsList = (props) => {
  return props.films.map((film, i) => {
    return <WrappedActiveCard
      film={film}
      cardHeaderClickHandler={props.cardHeaderClickHandler}
      key={`film-card-${i}`}
    />;
  });
};

FilmsList.propTypes = {
  cardHeaderClickHandler: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.shape({
      name: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.string,
    page: PropTypes.string,
    preview: PropTypes.string,
    genre: PropTypes.string
  })).isRequired
};

export default FilmsList;
