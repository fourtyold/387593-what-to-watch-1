import React from "react";
import renderer from "react-test-renderer";

import {MyListButton} from "./my-list-button.jsx";

const options = {
  addToFavorites: () => {},
  isFavorite: false,
  id: 1
};

it(`My list button correctly renders`, () => {
  const tree = renderer.create(
      <MyListButton
        addToFavorites={options.addToFavorites}
        isFavorite={options.isFavorite}
        id={options.id}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
