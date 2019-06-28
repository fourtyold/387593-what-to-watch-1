import MockAdapter from "axios-mock-adapter";
import {Operation, ActionType, reducer, transformFilmsData} from "./films.js";
import createAPI from "../../api.js";

const films = [
  {
    [`background_color`]: `#977461`,
    [`background_image`]: `https://es31-server.appspot.com/wtw/static/film/background/Shutter_Island.jpg`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    director: `Martin Scorsese`,
    genre: `Thriller`,
    id: 1,
    [`is_favorite`]: false,
    name: `Shutter Island`,
    [`poster_image`]: `https://es31-server.appspot.com/wtw/static/film/poster/Shutter_Island.jpg`,
    [`preview_image`]: `https://es31-server.appspot.com/wtw/static/film/preview/shutter-island.jpg`,
    [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.1,
    released: 2010,
    [`run_time`]: 138,
    [`scores_count`]: 1002557,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  }
];

it(`API works correctly`, () => {
  const loadFilms = Operation.loadFilms();
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);

  apiMock
    .onGet(`/films`)
    .reply(200, films);

  return loadFilms(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: [
          {
            backgroundColor: `#977461`,
            backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Shutter_Island.jpg`,
            description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
            director: `Martin Scorsese`,
            genre: `Thriller`,
            id: 1,
            isFavorite: false,
            name: `Shutter Island`,
            posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Shutter_Island.jpg`,
            previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/shutter-island.jpg`,
            previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            rating: 8.1,
            released: 2010,
            runTime: 138,
            scoresCount: 1002557,
            starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
            videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
          }
        ]
      });
    });
});

it(`Data transform correctly`, () => {
  expect(transformFilmsData(films)).toEqual([
    {
      backgroundColor: `#977461`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Shutter_Island.jpg`,
      description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
      director: `Martin Scorsese`,
      genre: `Thriller`,
      id: 1,
      isFavorite: false,
      name: `Shutter Island`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Shutter_Island.jpg`,
      previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/shutter-island.jpg`,
      previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: 8.1,
      released: 2010,
      runTime: 138,
      scoresCount: 1002557,
      starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
    }
  ]);
});

it(`Reducer return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    fullFilmsList: [],
    promoFilm: {}
  });
});

it(`Reducer change state correctly`, () => {
  expect(reducer({
    fullFilmsList: []
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })).toEqual({
    fullFilmsList: films
  });
});
