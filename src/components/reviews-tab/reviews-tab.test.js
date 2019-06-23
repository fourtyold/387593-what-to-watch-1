import React from "react";
import renderer from "react-test-renderer";

import ReviewsTab from "./reviews-tab.jsx";

it(`Reviews tab correctly renders`, () => {
  const tree = renderer.create(
      <ReviewsTab
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
