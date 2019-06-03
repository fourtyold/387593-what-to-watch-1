import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const init = () => {
  const options = {
    cardHeaderClickHandler: () => {},
  };
  ReactDOM.render(<Provider store={store}>
    <App
      cardHeaderClickHandler={options.cardHeaderClickHandler}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
