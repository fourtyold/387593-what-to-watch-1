import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const options = {
  moviesList: [
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