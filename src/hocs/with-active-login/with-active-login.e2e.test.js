import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveLogin from "./with-active-login.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  loginHandler: jest.fn(),
  emailChangeHandler: jest.fn(),
  passwordChangeHandler: jest.fn()
};

const MockComponent = (props) => (
  <div>
    <input className="email_input" type="text" onChange={props.emailChangeHandler} />
    <input className="password_input" type="text" onChange={props.passwordChangeHandler} />
    <button className="button_submit" onClick={props.loginHandler} />
  </div>
);

MockComponent.propTypes = {
  emailChangeHandler: PropTypes.func.isRequired,
  passwordChangeHandler: PropTypes.func.isRequired,
  loginHandler: PropTypes.func.isRequired
};

const MockComponentWrapped = withActiveLogin(MockComponent);

it(`On email & password change input value set to component state, submit form works correctly`, () => {
  const signIn = mount(
      <MockComponentWrapped
        loginHandler={options.loginHandler}
        emailChangeHandler={options.emailChangeHandler}
        passwordChangeHandler={options.passwordChangeHandler}
      />);
  signIn.find(`.email_input`).simulate(`change`, {target: {value: `testEmail`}});
  expect(signIn.state().email).toEqual(`testEmail`);

  signIn.find(`.password_input`).simulate(`change`, {target: {value: `testPassword`}});
  expect(signIn.state().password).toEqual(`testPassword`);

  signIn.find(`.button_submit`).simulate(`click`);
  expect(options.loginHandler).toHaveBeenCalledTimes(1);
  expect(options.loginHandler).toHaveBeenCalledWith({
    email: `testEmail`,
    password: `testPassword`
  });
});
