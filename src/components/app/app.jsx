import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MoviePlayer from "../movie-player/movie-player.jsx";
import AddReview from "../add-review/add-review.jsx";
import withActiveLogin from "../../hocs/with-active-login/with-active-login.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";
import withFilmsNumber from "../../hocs/with-films-number/with-films-number.js";
import withMoviePlayer from "../../hocs/with-movie-player/with-movie-player.js";
import withReview from "../../hocs/with-review/with-review.js";

const WrappedSignIn = withActiveLogin(SignIn);
const WrappedMyList = withPrivateRoute(MyList);
const WrappedMain = withFilmsNumber(Main);
const WrappedMoviePlayer = withMoviePlayer(MoviePlayer);
const WrappedAddReview = withReview(AddReview);

const App = () => {
  return <Switch>

    <Route path="/" exact render={() => <WrappedMain/>}/>

    <Route path="/login" component={WrappedSignIn}/>

    <Route path="/mylist" component={WrappedMyList}/>

    <Route path="/film/:id" exact component={MovieDetails}/>

    <Route path="/film/:id/player" component={WrappedMoviePlayer}/>

    <Route path="/reviews/add/:id" component={WrappedAddReview}/>

  </Switch>;
};

export default App;
