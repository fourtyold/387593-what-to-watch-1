const initialState = {
  fullFilmsList: []
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`
};

const transformFilmsData = (films) => {
  return films.map((film) => {
    return {
      backgroundColor: film.background_color,
      backgroundImage: film.background_image,
      description: film.description,
      director: film.director,
      genre: film.genre,
      id: film.id,
      isFavorite: film.is_favorite,
      name: film.name,
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      previewVideoLink: film.preview_video_link,
      rating: film.rating,
      released: film.released,
      runTime: film.run_time,
      scoresCount: film.scores_count,
      starring: film.starring,
      videoLink: film.video_link
    };
  });
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const transformedFilmsData = transformFilmsData(response.data);
        dispatch(ActionCreators.loadFilms(transformedFilmsData));
      });
  }
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        fullFilmsList: action.payload
      });
    default:
      return state;
  }
};

export {ActionType, Operation, ActionCreators, reducer, transformFilmsData};
