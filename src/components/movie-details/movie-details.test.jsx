import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";

import {MovieDetails} from "./movie-details.jsx";

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
  }
};

it(`Movie details correctly renders`, () => {
  const tree = renderer.create(<HashRouter>
    <MovieDetails
      film={options.film}
      avatarUrl={options.avatarUrl}
    />
  </HashRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
