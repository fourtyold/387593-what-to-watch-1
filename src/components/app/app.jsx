import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MoviePlayer from "../movie-player/movie-player.jsx";
import withActiveLogin from "../../hocs/with-active-login/with-active-login.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";
import withFilmsNumber from "../../hocs/with-films-number/with-films-number.js";
import withMoviePlayer from "../../hocs/with-movie-player/with-movie-player.js";

const WrappedSignIn = withActiveLogin(SignIn);
const WrappedFavorites = withPrivateRoute(Favorites);
const WrappedMain = withFilmsNumber(Main);
const WrappedMoviePlayer = withMoviePlayer(MoviePlayer);

const App = () => {
  return <Switch>

    <Route path="/" exact render={() => <WrappedMain/>}/>

    <Route path="/login" component={WrappedSignIn}/>

    <Route path="/favorites" component={WrappedFavorites}/>

    <Route path="/film/:id" exact component={MovieDetails}/>

    <Route path="/film/:id/player" component={WrappedMoviePlayer}/>

  </Switch>;
};

export default App;
