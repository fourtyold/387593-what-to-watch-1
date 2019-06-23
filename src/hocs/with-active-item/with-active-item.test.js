import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.js";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

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
