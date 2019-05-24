import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

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
  index: 0,
  enterHandler: () => {},
  leaveHandler: () => {},
  onHeaderClickHandler: () => {},
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
        onHeaderClick={options.onHeaderClickHandler}
        onEnter={options.enterHandler}
        onLeave={options.leaveHandler}
        isPlaying={options.isPlaying}
        index={options.index}
        muted={options.muted}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
