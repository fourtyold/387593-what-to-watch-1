import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app/app.jsx";
import combineReducers from "./reducer/index.js";
import {Operation} from "./reducer/films/films.js";
import createAPI from "./api.js";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      combineReducers,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadPromo());
  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
