import React from "react";
import renderer from "react-test-renderer";
import {HashRouter} from "react-router-dom";

import PlayButton from "./play-button.jsx";

it(`Play button renders correctly`, () => {
  const tree = renderer.create(
      <HashRouter>
        <PlayButton/>
      </HashRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
