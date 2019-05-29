import films from "./mocks/films.js";

const initialState = {
  filterGenre: `All genres`,
  filmsArray: films
};

const ActionType = {
  SET_FILTER_GENRE: 0,
  GET_FILMS_LIST: 1
};

const getFilteredArray = (genre) => {
  if (genre === `All genres`) {
    return [...films];
  }
  return films.filter((film) => {
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
  getFilmsList: (genre) => {
    return {
      type: ActionType.GET_FILMS_LIST,
      payload: getFilteredArray(genre)
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
        filmsArray: action.payload
      });
  }
  return state;
};

export {reducer, ActionCreators, ActionType, getFilteredArray};
