import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {HashRouter} from "react-router-dom";

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
  testClickHandler: () => {},
  setFilter: () => {},
  filterGenre: `All genres`,
  genresList: [`All genres`, `Adventure`, `Crime`],
  delay: 1000,
  isAuthorizationRequired: false,
  loginHandler: () => {},
  requireAuthorization: () => {},
  avatarUrl: `some-pick.jpg`
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`App correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(<HashRouter>
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
  </HashRouter>, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
