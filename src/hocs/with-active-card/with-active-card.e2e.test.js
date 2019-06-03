import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "../../components/film-card/film-card.jsx";
import withActiveCard from "./with-active-card.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  film: {
    image: {
      name: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`
    },
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    page: `movie-page.html`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Fantastic`
  },
  enterHandler: jest.fn(),
  leaveHandler: jest.fn(),
  cardHeaderClickHandler: jest.fn(),
  isPlaying: true,
  muted: true,
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
      />
  );
  filmCard.simulate(`mouseLeave`);
  expect(filmCard.state().isPlaying).toEqual(false);
});
