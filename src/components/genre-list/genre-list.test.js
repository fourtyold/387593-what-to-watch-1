import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";

const options = {
  filmList: [
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
    }],
  filterHandler: () => {},
  currentGenre: `genre`
};

it(`Genre list correctly renders`, () => {
  const tree = renderer.create(
      <GenreList
        filmList={options.filmList}
        filterHandler={options.filterHandler}
        currentGenre={options.currentGenre}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
