import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  film: {
    name: `Moonrise Kingdom`,
    page: `https://moonrise.html`,
    genre: `Adventure`,
    previewImage: `https://preview_1.jpg`,
    previewVideoLink: `https://preview_1.mp4`
  },
  enterHandler: jest.fn(),
  leaveHandler: jest.fn()
};

const MockComponent = (props) => (
  <div
    onMouseEnter={props.onEnter}
    onMouseLeave={props.onLeave}
  />
);

MockComponent.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
};

const MockComponentWrapped = withActiveCard(MockComponent);

it(`On mouse enter component state property changes to true`, () => {
  const filmCard = mount(
      <MockComponentWrapped
        film={options.film}
        onEnter={options.enterHandler}
        onLeave={options.leaveHandler}
      />
  );
  filmCard.simulate(`mouseEnter`);
  setTimeout(() => {
    expect(filmCard.state().isPlaying).toEqual(true);
  }, options.delay);
});

it(`On mouse leave component state property changes to false`, () => {
  const filmCard = mount(
      <MockComponentWrapped
        film={options.film}
        onEnter={options.enterHandler}
        onLeave={options.leaveHandler}
      />
  );
  filmCard.simulate(`mouseLeave`);
  expect(filmCard.state().isPlaying).toEqual(false);
});
