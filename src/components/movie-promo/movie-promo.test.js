import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {MoviePromo} from "./movie-promo.jsx";
import combineReducers from "../../reducer/index.js";

const options = {
  film: {
    posterImage: `poster`,
    name: `name`,
    genre: `genre`,
    released: 2000,
    id: 1
  },
  width: 100,
  height: 300
};

it(`Movie promo correctly renders`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(combineReducers)}>
          <HashRouter>
            <MoviePromo
              film={options.film}
              width={options.width}
              height={options.height}
            />
          </HashRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
