import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {HashRouter} from "react-router-dom";

import {MovieDetails} from "./movie-details.jsx";
import combineReducers from "../../reducer/index.js";

const options = {
  avatarUrl: `someUrl`,
  film: {
    name: `name`,
    genre: `genre`,
    director: `director`,
    posterImage: `poster`,
    released: 2000,
    id: 1,
    runTime: 100,
    backgroundColor: `#ffffff`,
    backgroundImage: `image`,
    starring: [`actor1`, `actor2`, `actor3`]
  },
  changeFilterGenre: () => {}
};

it(`Movie details correctly renders`, () => {
  const tree = renderer.create(
      <Provider store={createStore(combineReducers)}>
        <HashRouter>
          <MovieDetails
            film={options.film}
            avatarUrl={options.avatarUrl}
            changeFilterGenre={options.changeFilterGenre}
          />
        </HashRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
