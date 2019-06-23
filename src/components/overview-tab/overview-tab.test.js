import React from "react";
import renderer from "react-test-renderer";

import OverviewTab from "./overview-tab.jsx";

const options = {
  film: {
    director: `director`,
    rating: 5,
    scoresCount: 10000,
    starring: [`actor1`, `actor2`, `actor3`]
  }
};

it(`Overview tab correctly renders`, () => {
  const tree = renderer.create(
      <OverviewTab
        film={options.film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
