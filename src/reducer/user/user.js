const initialState = {
  isAuthorizationRequired: false,
  id: null,
  email: null,
  name: null,
  avatarUrl: null
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SAVE_LOGIN_DATA: `SAVE_LOGIN_DATA`
};

const Operation = {
  sendLoginData: (loginData) => (dispatch, _getState, api) => {
    const {email, password} = loginData;
    return api.post(`/login`, {
      email,
      password
    }).then((response) => {
      dispatch(ActionCreators.saveLoginData(response.data));
      dispatch(ActionCreators.requireAuthorization(false));
    });
  },
};

const ActionCreators = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  },
  saveLoginData: (loginData) => {
    return {
      type: ActionType.SAVE_LOGIN_DATA,
      payload: loginData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case ActionType.SAVE_LOGIN_DATA:
      return Object.assign({}, state, {
        isAuthorizationRequired: false,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        avatarUrl: action.payload[`avatar_url`]
      });
    default:
      return state;
  }
};

export {ActionType, Operation, ActionCreators, reducer};
