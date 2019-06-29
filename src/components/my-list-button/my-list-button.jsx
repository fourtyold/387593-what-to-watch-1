import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/films/films.js";

const MyListButton = (props) => {
  const {id, isFavorite, addToFavorites} = props;
  const buttonView = isFavorite ?
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg> :
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>;

  return <Fragment>
    <button className="btn btn--list movie-card__button" type="button" onClick={() => {
      addToFavorites({
        id,
        favorite: !props.isFavorite
      });
    }}>
      {buttonView}
      <span>My list</span>
    </button>
  </Fragment>;
};

MyListButton.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  addToFavorites: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (data) => {
    dispatch(Operation.addToFavorites(data));
  }
});

export {MyListButton};

export default connect(null, mapDispatchToProps)(MyListButton);
