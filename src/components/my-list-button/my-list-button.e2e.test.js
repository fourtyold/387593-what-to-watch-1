import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {MyListButton} from "./my-list-button.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  addToFavorites: jest.fn(),
  isFavorite: false,
  id: 1
};

it(`My list button calls handler with correct arguments`, () => {
  const addButton = shallow(<MyListButton
    addToFavorites={options.addToFavorites}
    isFavorite={options.isFavorite}
    id={options.id}
  />);

  addButton.find(`.movie-card__button`).simulate(`click`);
  expect(options.addToFavorites).toHaveBeenCalledTimes(1);
  expect(options.addToFavorites).toHaveBeenCalledWith({
    id: options.id,
    favorite: !options.isFavorite
  });
});
