import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {HashRouter} from "react-router-dom";

import {Main} from "./main.jsx";
import combineReducers from "../../reducer/index.js";

const options = {
  avatarUrl: `some-pick.jpg`,
  filmsShowNumber: 20,
  resetFilmsNumber: () => {},
  filmsArrayLength: 25,
  increaseFilmsNumber: () => {},
  promoFilm: {
    backgroundImage: `bgImage`,
    name: `string`
  },
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

it(`Main correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer
    .create(
        <Provider store={createStore(combineReducers)}>
          <HashRouter>
            <Main
              avatarUrl={options.avatarUrl}
              filmsShowNumber={options.filmsShowNumber}
              resetFilmsNumber={options.resetFilmsNumber}
              filmsArrayLength={options.filmsArrayLength}
              increaseFilmsNumber={options.increaseFilmsNumber}
              promoFilm={options.promoFilm}
              films={options.films}
            />
          </HashRouter>
        </Provider>,
        customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
