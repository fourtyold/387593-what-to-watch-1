import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {HashRouter} from "react-router-dom";

const options = {
  loginHandler: () => {},
  emailChangeHandler: () => {},
  passwordChangeHandler: () => {}
};

it(`Sign-in renders correctly`, () => {
  const tree = renderer.create(<HashRouter>
    <SignIn
      loginHandler={options.loginHandler}
      emailChangeHandler={options.emailChangeHandler}
      passwordChangeHandler={options.passwordChangeHandler}
    />
  </HashRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
