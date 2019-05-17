import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const options = {
  moviesList: [
    {
      image: {
        name: `fantastic-beasts-the-crimes-of-grindelwald`,
        extension: `jpg`
      },
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      page: `movie-page.html`
    },
    {
      image: {
        name: `bohemian-rhapsody`,
        extension: `jpg`
      },
      name: `Bohemian Rhapsody`,
      page: `movie-page.html`
    },
    {
      image: {
        name: `macbeth`,
        extension: `jpg`
      },
      name: `Macbeth`,
      page: `movie-page.html`
    },
    {
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`
    },
    {
      image: {
        name: `we-need-to-talk-about-kevin`,
        extension: `jpg`
      },
      name: `We need to talk about Kevin`,
      page: `movie-page.html`
    }
  ],
  testClickHandler: () => {}
};

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        moviesList = {options.moviesList}
        cardHeaderClickHandler = {options.testClickHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
