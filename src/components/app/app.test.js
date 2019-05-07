import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const options = {
  moviesList: [`test_1`, `test_2`, `test_3`, `test_4`],
  testClickHandler: () => {}
};

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        moviesList = {options.moviesList}
        cardHeaderClickHandler = {options.testClickHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
