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
  increaseFilmsNumber: () => {}
};

it(`Main correctly renders`, () => {
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
            />
          </HashRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
