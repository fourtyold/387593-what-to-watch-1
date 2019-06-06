import {ActionType, ActionCreators, reducer} from "./filter.js";

it(`Action creators works correctly`, () => {
  expect(ActionCreators.setFilterGenre(`Genre`)).toEqual({
    type: ActionType.SET_FILTER_GENRE,
    payload: `Genre`
  });
});

it(`Reducer return initial state correctly`, () => {
  expect(reducer(undefined, {})).toEqual({
    filterGenre: `All genres`
  });
});

it(`Reducer change state correctly`, () => {
  expect(reducer({
    filterGenre: `All genres`
  }, {
    type: ActionType.SET_FILTER_GENRE,
    payload: `Genre`
  })).toEqual({
    filterGenre: `Genre`
  });
});
