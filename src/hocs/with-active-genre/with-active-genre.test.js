import React from "react";
import renderer from "react-test-renderer";
import withActiveGenre from "./with-active-genre.js";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveGenre(MockComponent);

const options = {
  filterGenre: `All genres`,
  setFilter: jest.fn()
};

it(`With-active-genre correctly renders`, () => {
  const tree = renderer.create(<MockComponentWrapped
    filterGenre={options.filterGenre}
    setFilter={options.setFilter}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
