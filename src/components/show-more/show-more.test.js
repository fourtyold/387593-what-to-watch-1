import React from "react";
import renderer from "react-test-renderer";

import ShowMore from "./show-more.jsx";

const options = {
  increaseFilmsNumber: () => {}
};

it(`Show more correctly renders`, () => {
  const tree = renderer.create(
      <ShowMore
        increaseFilmsNumber={options.increaseFilmsNumber}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
