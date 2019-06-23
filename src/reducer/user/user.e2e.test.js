import {ActionType, ActionCreators, reducer} from "./user.js";

it(`Save login data action works correctly`, () => {
  expect(ActionCreators.saveLoginData({data: true})).toEqual({
    type: ActionType.SAVE_LOGIN_DATA,
    payload: {data: true}
  });
});

it(`Reducer return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    id: null,
    email: null,
    name: null,
    avatarUrl: null
  });
});

it(`Reducer save login data correctly`, () => {
  expect(reducer({
    isAuthorizationRequired: false,
    id: null,
    email: null,
    name: null,
    avatarUrl: null
  }, {
    type: ActionType.SAVE_LOGIN_DATA,
    payload: {
      id: 0,
      email: `someMail`,
      name: `someName`,
      [`avatar_url`]: `someUrl`
    }
  })).toEqual({
    isAuthorizationRequired: false,
    id: 0,
    email: `someMail`,
    name: `someName`,
    avatarUrl: `someUrl`
  });
});
