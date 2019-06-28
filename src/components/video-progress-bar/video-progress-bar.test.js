import React from "react";
import renderer from "react-test-renderer";

import VideoProgressBar from "./video-progress-bar.jsx";

const options = {
  progress: 50,
  formattedTime: {
    hours: `01`,
    minutes: `30`,
    seconds: `00`
  }
};

it(`Video progress bar renders correctly`, () => {
  const tree = renderer.create(
      <VideoProgressBar
        progress={options.progress}
        formattedTime={options.formattedTime}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
