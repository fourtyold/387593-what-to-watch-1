import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const init = (dataArray) => {
  const options = {
    moviesList: dataArray,
    cardHeaderClickHandler: () => {},
    delayBeforePlay: 1000
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

init(films);
