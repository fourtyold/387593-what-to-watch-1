import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const options = {
  films: [
    {
      image: {
        name: `fantastic-beasts-the-crimes-of-grindelwald`,
        extension: `jpg`
      },
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      image: {
        name: `bohemian-rhapsody`,
        extension: `jpg`
      },
      name: `Bohemian Rhapsody`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      image: {
        name: `macbeth`,
        extension: `jpg`
      },
      name: `Macbeth`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    },
    {
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      image: {
        name: `we-need-to-talk-about-kevin`,
        extension: `jpg`
      },
      name: `We need to talk about Kevin`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  ],
  onHeaderClickHandler: () => {},
  delay: 1000
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`Films list correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <FilmsList
        films={options.films}
        cardHeaderClickHandler={options.onHeaderClickHandler}
        delay={options.delay}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
