import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import films from "./mocks/films.js";

const store = createStore(reducer);

const init = (dataArray) => {
  const options = {
    cardHeaderClickHandler: () => {},
    delayBeforePlay: 1000,
    fullFilmsList: dataArray
  };
  ReactDOM.render(<Provider store={store}>
    <App
      cardHeaderClickHandler={options.cardHeaderClickHandler}
      delayBeforePlay={options.delayBeforePlay}
      fullFilmsList={options.fullFilmsList}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(films);
