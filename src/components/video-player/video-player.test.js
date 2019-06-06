import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const options = {
  film: {
    name: `Moonrise Kingdom`,
    page: `https://moonrise.html`,
    genre: `Adventure`,
    previewImage: `https://preview_1.jpg`,
    previewVideoLink: `https://preview_1.mp4`
  },
  isPlaying: false,
  muted: true
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Video player correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <VideoPlayer
        film={options.film}
        isPlaying={options.isPlaying}
        muted={options.muted}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
