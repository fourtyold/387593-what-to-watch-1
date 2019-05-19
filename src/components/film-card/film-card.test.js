import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const options = {
  film: {
    image: {
      name: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`
    },
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    page: `movie-page.html`
  },
  onPlayHandler: () => {},
  onOverHandler: () => {},
  onHeaderClickHandler: () => {}
};

it(`Film card correctly renders`, () => {
  const tree = renderer.create(
      <FilmCard
        film = {options.film}
        onHeaderClick = {options.onHeaderClickHandler}
        onPlay = {options.onPlayHandler}
        onOver = {options.onOverHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
