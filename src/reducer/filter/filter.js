const initialState = {
  filterGenre: `All genres`
};

const ActionType = {
  SET_FILTER_GENRE: `SET_FILTER_GENRE`
};

const ActionCreators = {
  setFilterGenre: (genre) => {
    return {
      type: ActionType.SET_FILTER_GENRE,
      payload: genre
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return Object.assign({}, state, {
        filterGenre: action.payload
      });
    default:
      return state;
  }
};

export {ActionType, ActionCreators, reducer};
