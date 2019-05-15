import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const options = {
  film: {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`
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
