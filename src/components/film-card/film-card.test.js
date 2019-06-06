import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const options = {
  film: {
    name: `Moonrise Kingdom`,
    page: `https://moonrise.html`,
    genre: `Adventure`,
    previewImage: `https://preview_1.jpg`,
    previewVideoLink: `https://preview_1.mp4`
  },
  leaveHandler: () => {},
  enterHandler: () => {},
  onHeaderClickHandler: () => {},
  isPlaying: false,
  muted: true
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Film card correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <FilmCard
        film={options.film}
        onLeave={options.leaveHandler}
        onEnter={options.enterHandler}
        onHeaderClick={options.onHeaderClickHandler}
        isPlaying={options.isPlaying}
        muted={options.muted}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
