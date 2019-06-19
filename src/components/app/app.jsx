import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import withActiveLogin from "../../hocs/with-active-login/with-active-login.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";
import {getFilterGenre} from "../../reducer/filter/selectors.js";
import {ActionCreators as filterActions} from "../../reducer/filter/filter.js";
import {getGenresList, getFilteredFilmsList} from "../../reducer/films/selectors.js";
import {getAvatarUrl} from "../../reducer/user/selectors.js";
import {ActionCreators as userActions, Operation} from "../../reducer/user/user.js";
import {checkIsAuthorizationRequired} from "../../reducer/user/selectors.js";

const WrappedSignIn = withActiveLogin(SignIn);
const WrappedFavorites = withPrivateRoute(Favorites);

const App = (props) => {
  return <Switch>

    <Route path="/" exact render={() => <Main
      moviesList={props.moviesList}
      cardHeaderClickHandler={props.cardHeaderClickHandler}
      filterGenre={props.filterGenre}
      setFilter={props.setFilter}
      requireAuthorization={props.requireAuthorization}
      handlerDelay={props.handlerDelay}
      genresList={props.genresList}
      avatarUrl={props.avatarUrl}
    />}/>

    <Route path="/login" exact render={() => <WrappedSignIn
      loginHandler={props.loginHandler}
    />}/>

    <Route path="/favorites" exact render={() => <WrappedFavorites
      isAuthorizationRequired={props.isAuthorizationRequired}
    />}/>

  </Switch>;
};

App.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    page: PropTypes.string,
    genre: PropTypes.string
  })).isRequired,
  cardHeaderClickHandler: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filterGenre: PropTypes.string.isRequired,
  genresList: PropTypes.arrayOf(PropTypes.string),
  handlerDelay: PropTypes.number.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  loginHandler: PropTypes.func.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: checkIsAuthorizationRequired(state),
  filterGenre: getFilterGenre(state),
  moviesList: getFilteredFilmsList(state),
  genresList: getGenresList(state),
  avatarUrl: getAvatarUrl(state)
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (genre) => {
    dispatch(filterActions.setFilterGenre(genre));
  },
  requireAuthorization: () => {
    dispatch(userActions.requireAuthorization(true));
  },
  loginHandler: (userData) => {
    dispatch(Operation.sendLoginData(userData));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
