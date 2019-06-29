import history from "../../history.js";

const initialState = {
  id: null,
  email: null,
  name: null,
  avatarUrl: null
};

const ActionType = {
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
      history.goBack();
    });
  },
  postReview: (data) => (dispatch, _getState, api) => {
    const {comment, id, rating} = data;
    return api.post(`/comments/${id}`, {
      comment,
      rating
    }).then(() => {
      history.push(`/film/${id}`);
    });
  },
  getLoginData: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreators.saveLoginData(response.data));
      }).catch(() => {});
  }
};

const ActionCreators = {
  saveLoginData: (loginData) => {
    return {
      type: ActionType.SAVE_LOGIN_DATA,
      payload: loginData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_LOGIN_DATA:
      return Object.assign({}, state, {
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
