import React from "react";
import renderer from "react-test-renderer";
import withActiveCard from "./with-active-card.js";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

const options = {
  film: {
    name: `Moonrise Kingdom`,
    page: `https://moonrise.html`,
    genre: `Adventure`,
    previewImage: `https://preview_1.jpg`,
    previewVideoLink: `https://preview_1.mp4`
  },
  cardHeaderClickHandler: () => {},
  enterHandler: () => {},
  leaveHandler: () => {},
  isPlaying: true,
  delay: 1000
};

it(`With-active-card renders correctly`, () => {
  const tree = renderer.create(<MockComponentWrapped
    film={options.film}
    isPlaying={options.isPlaying}
    onEnter={options.enterHandler}
    onLeave={options.leaveHandler}
    cardHeaderClickHandler={options.cardHeaderClickHandler}
    handlerDelay={options.delay}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
