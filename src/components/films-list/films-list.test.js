import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const options = {
  films: [
    {
      img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`
    },
    {
      img: `img/bohemian-rhapsody.jpg`,
      name: `Bohemian Rhapsody`
    },
    {
      img: `img/macbeth.jpg`,
      name: `Macbeth`
    },
    {
      img: `img/aviator.jpg`,
      name: `Aviator`
    },
    {
      img: `img/we-need-to-talk-about-kevin.jpg`,
      name: `We need to talk about Kevin`
    }
  ],
  onHeaderClickHandler: () => {}
};

it(`Films list correctly renders`, () => {
  const tree = renderer.create(
      <FilmsList
        films = {options.films}
        cardHeaderClickHandler = {options.onHeaderClickHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
