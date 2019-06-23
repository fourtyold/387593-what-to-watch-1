import React from "react";
import renderer from "react-test-renderer";

import DetailsTab from "./details-tab.jsx";

const options = {
  film: {
    director: `director`,
    starring: [`actor1`, `actor2`, `actor3`],
    runTime: 100,
    genre: `genre`,
    released: 2000
  }
};

it(`Details tab correctly renders`, () => {
  const tree = renderer.create(
      <DetailsTab
        film={options.film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
