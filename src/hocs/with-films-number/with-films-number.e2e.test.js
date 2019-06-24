import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFilmsNumber from "./with-films-number.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  increaseValue: 20,
  increaseFilmsNumber: jest.fn(),
  resetFilmsNumber: jest.fn()
};

const MockComponent = (props) => (
  <div>
    <button className="increase" type="button" onClick={() => {
      props.increaseFilmsNumber(options.increaseValue);
    }}></button>
    <button className="reset" type="button" onClick={props.resetFilmsNumber}></button>
  </div>
);

MockComponent.propTypes = {
  increaseFilmsNumber: PropTypes.func.isRequired,
  resetFilmsNumber: PropTypes.func.isRequired
};

const MockComponentWrapped = withFilmsNumber(MockComponent);

it(`On show more films button state property increases correctly`, () => {
  const main = mount(
      <MockComponentWrapped
        increaseFilmsNumber={options.increaseFilmsNumber}
        resetFilmsNumber={options.resetFilmsNumber}
      />
  );
  main.find(`.increase`).simulate(`click`);
  expect(main.state().filmsShowNumber).toEqual(40);
});

it(`On genre select state property resets correctly`, () => {
  const main = mount(
      <MockComponentWrapped
        increaseFilmsNumber={options.increaseFilmsNumber}
        resetFilmsNumber={options.resetFilmsNumber}
      />
  );
  main.find(`.reset`).simulate(`click`);
  expect(main.state().filmsShowNumber).toEqual(20);
});
