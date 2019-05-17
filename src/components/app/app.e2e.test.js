import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

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
