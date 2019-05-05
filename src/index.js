import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const options = {
    moviesList: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`],
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

init();
