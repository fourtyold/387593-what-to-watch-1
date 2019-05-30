import {filterFilms, ActionCreators, ActionType, reducer} from "./reducer.js";

const films = [
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
];

it(`All genres array is correct`, () => {
  expect(filterFilms(`All genres`, films)).toEqual(films);
});

it(`Films array filter correctly`, () => {
  expect(filterFilms(`Dramas`, films)).toEqual([{
    image: {
      name: `aviator`,
      extension: `jpg`
    },
    name: `Aviator`,
    page: `movie-page.html`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Dramas`
  }]);
});

it(`Action creator returns correct genre on change filter genre`, () => {
  const genre = `genreType`;
  expect(ActionCreators.setFilterGenre(genre)).toEqual({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre
  });
});

it(`Action creator returns full films list, if filter type - all genres`, () => {
  expect(ActionCreators.getFilmsList(`All genres`, films)).toEqual({
    type: ActionType.GET_FILMS_LIST,
    payload: films
  });
});

it(`Action creator returns correct filtered films list, if filter type is not all genres`, () => {
  expect(ActionCreators.getFilmsList(`Dramas`, films)).toEqual({
    type: ActionType.GET_FILMS_LIST,
    payload: [{
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Dramas`
    }]
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    filterGenre: `All genres`,
    films
  });
});

it(`Reducer set correct genre to state`, () => {
  expect(reducer({
    filterGenre: `All genres`,
    filmsArray: films
  }, {
    type: ActionType.SET_FILTER_GENRE,
    payload: `Dramas`
  })).toEqual({
    filterGenre: `Dramas`,
    filmsArray: films
  });
});

it(`Reducer set correct films array to state`, () => {
  expect(reducer({
    filterGenre: `Dramas`,
    films
  }, {
    type: ActionType.GET_FILMS_LIST,
    payload: [{
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Dramas`
    }]
  })).toEqual({
    filterGenre: `Dramas`,
    films: [{
      image: {
        name: `aviator`,
        extension: `jpg`
      },
      name: `Aviator`,
      page: `movie-page.html`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Dramas`
    }]
  });
});
