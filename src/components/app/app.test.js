import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {HashRouter} from "react-router-dom";

import App from "./app.jsx";
import combineReducers from "../../reducer/index.js";

it(`App correctly renders`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(combineReducers)}>
          <HashRouter>
            <App />
          </HashRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
