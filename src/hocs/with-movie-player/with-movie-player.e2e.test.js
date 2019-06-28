import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMoviePlayer from "./with-movie-player.js";
import {MoviePlayer} from "../../components/movie-player/movie-player.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  playHandler: jest.fn(),
  pauseHandler: jest.fn(),
  handleTimeUpdate: jest.fn(),
  setTotalTime: jest.fn(),
  isPlaying: false,
  progress: 50,
  elapsedTime: 600,
  film: {
    name: `name`,
    videoLink: `link`,
    runTime: 600
  }
};

HTMLVideoElement.prototype.play = jest.fn();
HTMLVideoElement.prototype.pause = jest.fn();

const MockComponentWrapped = withMoviePlayer(MoviePlayer);

it(`On mount state changes correctly`, () => {
  const moviePlayer = mount(
      <MockComponentWrapped
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
        handleTimeUpdate={options.handleTimeUpdate}
        setTotalTime={options.setTotalTime}
        isPlaying={options.isPlaying}
        progress={options.progress}
        elapsedTime={options.elapsedTime}
        film={options.film}
      />
  );

  expect(moviePlayer.state().totalTime).toEqual(options.film.runTime * 60);
});

it(`Play handler call changes state correctly and calls for play on video element`, () => {
  const moviePlayer = mount(
      <MockComponentWrapped
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
        handleTimeUpdate={options.handleTimeUpdate}
        setTotalTime={options.setTotalTime}
        isPlaying={options.isPlaying}
        progress={options.progress}
        elapsedTime={options.elapsedTime}
        film={options.film}
      />
  );
  moviePlayer.prop(`playHandler`)();
  setTimeout(() => {
    expect(moviePlayer.state().isPlaying).toEqual(true);
    expect(HTMLVideoElement.prototype.play).toHaveBeenCalledTimes(1);
  }, 1);
});


it(`Pause handler call changes state correctly and calls for pause on video element`, () => {
  const moviePlayer = mount(
      <MockComponentWrapped
        playHandler={options.playHandler}
        pauseHandler={options.pauseHandler}
        handleTimeUpdate={options.handleTimeUpdate}
        setTotalTime={options.setTotalTime}
        isPlaying={!options.isPlaying}
        progress={options.progress}
        elapsedTime={options.elapsedTime}
        film={options.film}
      />
  );
  moviePlayer.prop(`pauseHandler`)();
  setTimeout(() => {
    expect(moviePlayer.state().isPlaying).toEqual(false);
    expect(HTMLVideoElement.prototype.pause).toHaveBeenCalledTimes(1);
  }, 1);
});
