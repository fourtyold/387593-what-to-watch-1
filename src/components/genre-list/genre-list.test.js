import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list.jsx";

const options = {
  genresArray: [`All genres`, `Fantastic`, `Documentary`, `Dramas`],
  filterHandler: () => {},
  currentGenre: `genre`,
  onSelect: () => {},
  activeItem: `genre`,
  resetFilmsNumber: () => {}
};

it(`Genre list correctly renders`, () => {
  const tree = renderer.create(
      <GenreList
        genresArray={options.genresArray}
        filterHandler={options.filterHandler}
        currentGenre={options.currentGenre}
        onSelect={options.onSelect}
        activeItem={options.activeItem}
        resetFilmsNumber={options.resetFilmsNumber}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
