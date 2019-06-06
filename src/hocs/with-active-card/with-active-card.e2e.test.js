import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "../../components/film-card/film-card.jsx";
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
  leaveHandler: jest.fn(),
  cardHeaderClickHandler: jest.fn(),
  isPlaying: true,
  delay: 1000
};

const MockComponentWrapped = withActiveCard(FilmCard);

it(`On mouse enter component state property changes to true`, () => {
  const filmCard = mount(
      <MockComponentWrapped
        film={options.film}
        isPlaying={!options.isPlaying}
        onEnter={options.enterHandler}
        onLeave={options.leaveHandler}
        cardHeaderClickHandler={options.cardHeaderClickHandler}
        handlerDelay={options.delay}
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
        isPlaying={options.isPlaying}
        onEnter={options.enterHandler}
        onLeave={options.leaveHandler}
        cardHeaderClickHandler={options.cardHeaderClickHandler}
        handlerDelay={options.delay}
      />
  );
  filmCard.simulate(`mouseLeave`);
  expect(filmCard.state().isPlaying).toEqual(false);
});
