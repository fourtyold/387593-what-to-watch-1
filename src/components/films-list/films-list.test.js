import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const options = {
  films: [
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
  onHeaderClickHandler: () => {},
  delay: 1000
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Films list correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <FilmsList
        films={options.films}
        cardHeaderClickHandler={options.onHeaderClickHandler}
        handlerDelay={options.delay}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
