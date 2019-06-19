import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./app.jsx";
import {HashRouter} from "react-router-dom";

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
  genresList: [`All genres`, `Crime`, `Adventure`],
  delay: 1000,
  isAuthorizationRequired: false,
  loginHandler: jest.fn(),
  requireAuthorization: jest.fn(),
  avatarUrl: `some-pick.jpg`
};

it(`Click on card header works correctly`, () => {
  const app = mount(<HashRouter>
    <App
      moviesList={options.moviesList}
      cardHeaderClickHandler={options.testClickHandler}
      setFilter={options.setFilter}
      filterGenre={options.filterGenre}
      genresList={options.genresList}
      handlerDelay={options.delay}
      isAuthorizationRequired={options.isAuthorizationRequired}
      loginHandler={options.loginHandler}
      requireAuthorization={options.requireAuthorization}
      avatarUrl={options.avatarUrl}
    />
  </HashRouter>);

  const cardHeader = app.find(`.small-movie-card__title`);
  cardHeader.at(0).simulate(`click`);
  expect(options.testClickHandler).toHaveBeenCalledTimes(1);
});
