import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const options = {
  film: {
    image: {
      name: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`
    },
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    page: `movie-page.html`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
