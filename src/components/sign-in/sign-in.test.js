import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

const options = {
  loginHandler: () => {},
  emailChangeHandler: () => {},
  passwordChangeHandler: () => {}
};

it(`Sign-in renders correctly`, () => {
  const tree = renderer.create(
      <SignIn
        loginHandler={options.loginHandler}
        emailChangeHandler={options.emailChangeHandler}
        passwordChangeHandler={options.passwordChangeHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
