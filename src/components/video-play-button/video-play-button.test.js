import React from "react";
import renderer from "react-test-renderer";

import VideoPlayButton from "./video-play-button.jsx";

const options = {
  isPlaying: false,
  playHandler: () => {},
  pauseHandler: () => {}
};

it(`Video play button renders correctly`, () => {
  const tree = renderer.create(
      <VideoPlayButton
        isPlaying={options.isPlaying}
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
