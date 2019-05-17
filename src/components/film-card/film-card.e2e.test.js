import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  film: {
    image: {
      name: `fantastic-beasts-the-crimes-of-grindelwald`,
      extension: `jpg`
    },
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    page: `movie-page.html`
  },
  onPlayHandler: jest.fn(),
  onOverHandler: jest.fn(),
  onHeaderClickHandler: jest.fn()
};

it(`Click on play button works correctly`, () => {
  const filmCard = mount(<FilmCard
    film = {options.film}
    onHeaderClick = {options.onHeaderClickHandler}
    onPlay = {options.onPlayHandler}
    onOver = {options.onOverHandler}
  />);

  const playButton = filmCard.find(`.small-movie-card__play-btn`);
  playButton.simulate(`click`);
  expect(options.onPlayHandler).toHaveBeenCalledTimes(1);
  expect(options.onPlayHandler).toHaveBeenCalledWith(options.film);
});
