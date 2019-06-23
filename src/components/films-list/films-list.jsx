import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card.jsx";
import withActiveCard from "../../hocs/with-active-card/with-active-card.js";
import {getFilteredFilmsList} from "../../reducer/films/selectors.js";

const WrappedActiveCard = withActiveCard(FilmCard);

const FilmsList = (props) => {
  return props.films.map((film, i) => {
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
  })).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilteredFilmsList(state),
});

export {FilmsList};

export default connect(mapStateToProps)(FilmsList);
