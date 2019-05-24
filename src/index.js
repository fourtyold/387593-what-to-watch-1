import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const init = (dataArray, delay) => {
  const options = {
    moviesList: dataArray,
    cardHeaderClickHandler: () => {},
    delayBeforePlay: delay
  };
  ReactDOM.render(
      <App
        moviesList={options.moviesList}
        cardHeaderClickHandler={options.cardHeaderClickHandler}
        delayBeforePlay={options.delayBeforePlay}
      />,
      document.querySelector(`#root`)
  );
};

init(films, 1000);
