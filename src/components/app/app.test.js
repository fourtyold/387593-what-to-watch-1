import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        moviesList = {[`test_1`, `test_2`, `test_3`, `test_4`]}
        cardHeaderClickHandler = {() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
