import createAPI from "./api";
import MockAdapter from "axios-mock-adapter";
import {ActionType as filmsActionType, Operation as filmsOperation, transformFilmsData} from "./reducer/films/films.js";
import {ActionType as userActionType, Operation as userOperation} from "./reducer/user/user.js";

it(`Should make a correct API call to /films`, () => {
  const dispatch = jest.fn();
  const api = createAPI();
  const apiMock = new MockAdapter(api);
  const loadFilms = filmsOperation.loadFilms();

  apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

  return loadFilms(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: filmsActionType.LOAD_FILMS,
        payload: transformFilmsData([{fake: true}])
      });
    });
});

it(`Should make a coorect API call to /login`, () => {
  const dispatch = jest.fn();
  const api = createAPI();
  const apiMock = new MockAdapter(api);
  const sendLoginData = userOperation.sendLoginData({email: `someMail`, password: `somePass`});

  apiMock
    .onPost(`/login`)
    .reply(200, {fake: true});

  return sendLoginData(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: userActionType.SAVE_LOGIN_DATA,
        payload: {fake: true}
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: userActionType.REQUIRE_AUTHORIZATION,
        payload: false
      });
    });
});
