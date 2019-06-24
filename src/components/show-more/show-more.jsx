import React from "react";
import PropTypes from "prop-types";

import {FILMS_SHOW_STEP} from "../../constants.js";

const ShowMore = (props) => {
  return <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={() => {
      props.increaseFilmsNumber(FILMS_SHOW_STEP);
    }}>Show more</button>
  </div>;
};

ShowMore.propTypes = {
  increaseFilmsNumber: PropTypes.func.isRequired
};

export default ShowMore;
