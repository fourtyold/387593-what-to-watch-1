import React from "react";
import renderer from "react-test-renderer";

import {MoviePlayer} from "./movie-player.jsx";

const options = {
  playHandler: () => {},
  pauseHandler: () => {},
  handleTimeUpdate: () => {},
  setTotalTime: () => {},
  isPlaying: false,
  progress: 0,
  elapsedTime: 600,
  film: {
    name: `name`,
    videoLink: `link`,
    runTime: 600
  }
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Movie player correctly renders`, () => {
  const customMockCreator = {createNodeMock};

  const tree = renderer
    .create(
        <MoviePlayer
          playHandler={options.playHandler}
          pauseHandler={options.pauseHandler}
          handleTimeUpdate={options.handleTimeUpdate}
          setTotalTime={options.setTotalTime}
          isPlaying={options.isPlaying}
          progress={options.progress}
          elapsedTime={options.elapsedTime}
          film={options.film}
        />, customMockCreator
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

