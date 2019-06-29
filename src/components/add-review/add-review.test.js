import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";

import {AddReview} from "./add-review.jsx";

const options = {
  avatarUrl: `avatar`,
  film: {
    name: `name`,
    posterImage: `poster`,
    id: 1,
    backgroundColor: `bgColor`,
    backgroundImage: `bgImage`
  },
  reviewHandler: () => {},
  ratingHandler: () => {},
  formSubmitHandler: () => {},
  isEnabled: false
};

it(`Add review page renders correctly`, () => {
  const tree = renderer.create(
      <HashRouter>
        <AddReview
          avatarUrl={options.avatarUrl}
          film={options.film}
          reviewHandler={options.reviewHandler}
          ratingHandler={options.ratingHandler}
          formSubmitHandler={options.formSubmitHandler}
          isEnabled={options.isEnabled}
        />
      </HashRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
