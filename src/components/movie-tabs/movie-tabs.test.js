import React from "react";
import renderer from "react-test-renderer";

import MovieTabs from "./movie-tabs.jsx";

const options = {
  onSelect: () => {},
  activeItem: ``,
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
    rating: 5,
    starring: [`actor1`, `actor2`, `actor3`]
  }
};

it(`Movie tabs correctly renders`, () => {
  const tree = renderer.create(
      <MovieTabs
        onSelect={options.onSelect}
        activeItem={options.activeItem}
        film={options.film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
