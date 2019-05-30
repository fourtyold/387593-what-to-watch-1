import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const options = {
  moviesList: [
    {
      image: {
        name: `fantastic-beasts-the-crimes-of-grindelwald`,
        extension: `jpg`
      },
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Fantastic`
    },
    {
      image: {
        name: `bohemian-rhapsody`,
        extension: `jpg`
      },
      name: `Bohemian Rhapsody`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Documentary`
    },
    {
      image: {
        name: `macbeth`,
        extension: `jpg`
      },
      name: `Macbeth`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Documentary`
    },
    {
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Dramas`
    },
    {
      image: {
        name: `we-need-to-talk-about-kevin`,
        extension: `jpg`
      },
      name: `We need to talk about Kevin`,
      page: `movie-page.html`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Fantastic`
    }
  ],
  testClickHandler: () => {},
  onSetFilter: () => {},
  delayBeforePlay: 1000,
  filterGenre: `All genres`
};

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

it(`App correctly renders`, () => {
  const customMockCreator = {createNodeMock};
  const tree = renderer.create(
      <App
        moviesList={options.moviesList}
        onSetFilter={options.onSetFilter}
        filterGenre={options.filterGenre}
        fullFilmsList={options.moviesList}
        cardHeaderClickHandler={options.testClickHandler}
        delayBeforePlay={options.delayBeforePlay}
      />, customMockCreator).toJSON();

  expect(tree).toMatchSnapshot();
});
