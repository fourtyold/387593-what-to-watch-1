import React from "react";
import PropTypes from "prop-types";

const withActiveGenre = (Component) => {
  const WithActiveGenre = (props) => {
    return <Component
      filterHandler={props.setFilter}
      currentGenre={props.filterGenre}
      genresArray={props.genresList}
    />;
  };

  WithActiveGenre.propTypes = {
    filterGenre: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    genresList: PropTypes.arrayOf(PropTypes.string)
  };

  return WithActiveGenre;
};

export default withActiveGenre;
