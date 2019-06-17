import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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
  filterGenre: `All genres`,
  setFilter: () => {},
  requireAuthorization: () => {},
  delay: 1000,
  genresList: [`All genres`, `Adventure`, `Crime`],
  avatarUrl: `some-pick.jpg`
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Main correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <Main
        moviesList={options.moviesList}
        cardHeaderClickHandler={options.testClickHandler}
        filterGenre={options.filterGenre}
        setFilter={options.setFilter}
        requireAuthorization={options.requireAuthorization}
        handlerDelay={options.delay}
        genresList={options.genresList}
        avatarUrl={options.avatarUrl}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
