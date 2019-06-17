import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "../../components/sign-in/sign-in.jsx";
import withActiveLogin from "./with-active-login.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  loginHandler: jest.fn(),
  emailChangeHandler: jest.fn(),
  passwordChangeHandler: jest.fn()
};

const MockComponentWrapped = withActiveLogin(SignIn);

it(`On email & password change input value set to component state, submit form works correctly`, () => {
  const signIn = mount(
      <MockComponentWrapped
        loginHandler={options.loginHandler}
        emailChangeHandler={options.emailChangeHandler}
        passwordChangeHandler={options.passwordChangeHandler}
      />
  );
  signIn.find(`#user-email`).simulate(`change`, {target: {value: `testEmail`}});
  expect(signIn.state().email).toEqual(`testEmail`);

  signIn.find(`#user-password`).simulate(`change`, {target: {value: `testPassword`}});
  expect(signIn.state().password).toEqual(`testPassword`);

  signIn.find(`.sign-in__form`).simulate(`submit`);
  expect(options.loginHandler).toHaveBeenCalledTimes(1);
  expect(options.loginHandler).toHaveBeenCalledWith({
    email: `testEmail`,
    password: `testPassword`
  });
});
