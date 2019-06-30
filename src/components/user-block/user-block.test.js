import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";

import {UserBlock} from "./user-block.jsx";

const options = {
  avatarUrl: `avatar`,
  getFavoritesList: () => {}
};

it(`User block renders correctly`, () => {
  const tree = renderer.create(
      <HashRouter>
        <UserBlock
          avatarUrl={options.avatarUrl}
          getFavoritesList={options.getFavoritesList}
        />
      </HashRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
