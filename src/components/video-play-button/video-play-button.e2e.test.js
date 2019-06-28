import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayButton from "./video-play-button.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  isPlaying: true,
  isPaused: false,
  playHandler: jest.fn(),
  pauseHandler: jest.fn()
};

it(`Play handler is called, when video is on pause`, () => {
  const playButton = shallow(
      <VideoPlayButton
        isPlaying={options.isPaused}
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
      />
  );
  playButton.find(`.player__play`).simulate(`click`);
  expect(options.playHandler).toHaveBeenCalledTimes(1);
});

it(`Pause handler is called, when video is playing`, () => {
  const playButton = shallow(
      <VideoPlayButton
        isPlaying={options.isPlaying}
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
      />
  );
  playButton.find(`.player__play`).simulate(`click`);
  expect(options.pauseHandler).toHaveBeenCalledTimes(1);
});
