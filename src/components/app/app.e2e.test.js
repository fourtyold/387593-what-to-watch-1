import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

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
  testClickHandler: jest.fn()
};

it(`Click on card header works correctly`, () => {
  const app = mount(<App
    moviesList = {options.moviesList}
    cardHeaderClickHandler = {options.testClickHandler}
  />);

  const cardHeader = app.find(`.small-movie-card__title`);
  cardHeader.at(0).simulate(`click`);
  expect(options.testClickHandler).toHaveBeenCalledTimes(1);
});
