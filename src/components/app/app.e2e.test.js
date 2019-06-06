import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  moviesList: [
    {
      name: `Moonrise Kingdom`,
      page: `https://moonrise.html`,
      genre: `Adventure`,
      previewImage: `https://preview_1.jpg`,
      previewVideoLink: `https://preview_1.mp4`
    },
    {
      name: `Gangs of New York`,
      page: `https://gangs.html`,
      genre: `Crime`,
      previewImage: `https://preview_2.jpg`,
      previewVideoLink: `https://preview_2.mp4`,
    }
  ],
  testClickHandler: jest.fn(),
  setFilter: jest.fn(),
  filterGenre: `All genres`,
  delay: 1000,
  genresList: [`All genres`, `Crime`, `Adventure`]
};

it(`Click on card header works correctly`, () => {
  const app = mount(<App
    moviesList={options.moviesList}
    cardHeaderClickHandler={options.testClickHandler}
    filterGenre={options.filterGenre}
    setFilter={options.setFilter}
    handlerDelay={options.delay}
    genresList={options.genresList}
  />);

  const cardHeader = app.find(`.small-movie-card__title`);
  cardHeader.at(0).simulate(`click`);
  expect(options.testClickHandler).toHaveBeenCalledTimes(1);
});
