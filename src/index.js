import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const init = () => {
  const moviesList = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
  ReactDOM.render(
      <App
        moviesList = {moviesList}
      />,
      document.querySelector(`#root`)
  );
};

init();
