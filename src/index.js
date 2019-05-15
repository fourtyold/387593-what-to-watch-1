import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const init = (dataArray) => {
  const options = {
    moviesList: dataArray,
    cardHeaderClickHandler: () => {}
  };
  ReactDOM.render(
      <App
        moviesList = {options.moviesList}
        cardHeaderClickHandler = {options.cardHeaderClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
