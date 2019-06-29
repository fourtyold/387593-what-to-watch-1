const initialState = {
  fullFilmsList: [],
  promoFilm: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`
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

const handleFavoriteStatus = (state, film) => {
  const filmsArray = state.fullFilmsList.slice();
  for (let i = 0; i < filmsArray.length; i++) {
    if (filmsArray[i].id === film.id) {
      filmsArray[i] = film;
      break;
    }
  }
  const promo = state.promoFilm.id === film.id ? film : state.promoFilm;
  return {filmsArray, promo};
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const transformedFilmsData = transformFilmsData(response.data);
        dispatch(ActionCreators.loadFilms(transformedFilmsData));
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const transformedPromoData = transformFilmsData([response.data]);
        dispatch(ActionCreators.loadPromo(transformedPromoData[0]));
      });
  },
  addToFavorites: (data) => (dispatch, _getState, api) => {
    const {id, favorite} = data;
    const status = favorite ? 1 : 0;
    return api.post(`favorite/${id}/${status}`).then((response) => {
      const transformedFilmData = transformFilmsData([response.data]);
      dispatch(ActionCreators.updateFavorite(transformedFilmData[0]));
    });
  }
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  loadPromo: (promo) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promo
    };
  },
  updateFavorite: (film) => {
    return {
      type: ActionType.CHANGE_FAVORITE,
      payload: film,
      handler: handleFavoriteStatus
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        fullFilmsList: action.payload
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promoFilm: action.payload
      });
    case ActionType.CHANGE_FAVORITE:
      const updatedFilms = action.handler(state, action.payload);
      return Object.assign({}, state, {
        promoFilm: updatedFilms.promo,
        fullFilmsList: updatedFilms.filmsArray
      });
    default:
      return state;
  }
};

export {ActionType, Operation, ActionCreators, reducer, transformFilmsData};
