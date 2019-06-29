import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {Router} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";
import history from "./history.js";

import App from "./components/app/app.jsx";
import combineReducers from "./reducer/index.js";
import {Operation as filmsOperations} from "./reducer/films/films.js";
import {Operation as userOperation} from "./reducer/user/user.js";
import createAPI from "./api.js";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      combineReducers,
      composeEnhancers(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  store.dispatch(filmsOperations.loadFilms());
  store.dispatch(filmsOperations.loadPromo());
  store.dispatch(userOperation.getLoginData());

  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
