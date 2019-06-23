import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import withActiveLogin from "../../hocs/with-active-login/with-active-login.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";

const WrappedSignIn = withActiveLogin(SignIn);
const WrappedFavorites = withPrivateRoute(Favorites);

const App = () => {
  return <Switch>

    <Route path="/" exact render={() => <Main/>}/>

    <Route path="/login" component={WrappedSignIn}/>

    <Route path="/favorites" component={WrappedFavorites}/>

    <Route path="/film/:id" component={MovieDetails}/>

  </Switch>;
};

export default App;
