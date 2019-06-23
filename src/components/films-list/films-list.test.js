import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";

import {FilmsList} from "./films-list.jsx";

const options = {
  films: [
    {
      id: 1,
      name: `Moonrise Kingdom`,
      page: `https://moonrise.html`,
      genre: `Adventure`,
      previewImage: `https://preview_1.jpg`,
      previewVideoLink: `https://preview_1.mp4`
    },
    {
      id: 1,
      name: `Gangs of New York`,
      page: `https://gangs.html`,
      genre: `Crime`,
      previewImage: `https://preview_2.jpg`,
      previewVideoLink: `https://preview_2.mp4`,
    }
  ]
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Films list correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(<HashRouter>
    <FilmsList
      films={options.films}
    />
  </HashRouter>, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
