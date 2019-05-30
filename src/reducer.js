import films from "./mocks/films.js";

const initialState = {
  filterGenre: `All genres`,
  films
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`,
  GET_FILMS_LIST: `GET_FILMS_LIST`
};

const filterFilms = (genre, fullFilmsList) => {
  if (genre === `All genres`) {
    return [...fullFilmsList];
  }
  return fullFilmsList.filter((film) => {
    return film.genre === genre;
  });
};

const ActionCreators = {
  setFilterGenre: (genre) => {
    return {
      type: ActionType.SET_FILTER_GENRE,
      payload: genre
    };
  },
  getFilmsList: (genre, fullFilmsList) => {
    return {
      type: ActionType.GET_FILMS_LIST,
      payload: filterFilms(genre, fullFilmsList)
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        filterGenre: action.payload
      });
    case ActionType.GET_FILMS_LIST:
      return Object.assign({}, state, {
        films: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionCreators, ActionType, filterFilms};
