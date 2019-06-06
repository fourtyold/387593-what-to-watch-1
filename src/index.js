import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";

import App from "./components/app/app.jsx";
import combineReducers from "./reducer/index.js";
import {Operation} from "./reducer/films/films.js";
import createAPI from "./api.js";

const options = {
  cardHeaderClickHandler: () => {},
  handlerDelay: 1000
};

const init = () => {
  const {cardHeaderClickHandler, handlerDelay} = options;
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      combineReducers,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  store.dispatch(Operation.loadFilms());
  ReactDOM.render(<Provider store={store}>
    <App
      cardHeaderClickHandler={cardHeaderClickHandler}
      handlerDelay={handlerDelay}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
