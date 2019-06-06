import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

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
  delay: 1000
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`App correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <App
        moviesList={options.moviesList}
        cardHeaderClickHandler={options.testClickHandler}
        filterGenre={options.filterGenre}
        setFilter={options.setFilter}
        handlerDelay={options.delay}
        genresList={options.genresList}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
