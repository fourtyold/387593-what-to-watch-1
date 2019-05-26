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
    page: `movie-page.html`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  enterHandler: jest.fn(),
  leaveHandler: jest.fn(),
  onHeaderClickHandler: jest.fn(),
  index: 0,
  isPlaying: false,
  muted: true
};

it(`Handler is called on card hover`, () => {
  const filmCard = mount(<FilmCard
    film={options.film}
    onHeaderClick={options.onHeaderClickHandler}
    onEnter={options.enterHandler}
    onLeave={options.leaveHandler}
    index={options.index}
    isPlaying={options.isPlaying}
    muted={options.muted}
  />);

  // const playButton = filmCard.find(`.small-movie-card__play-btn`);
  // playButton.simulate(`click`);
  const card = filmCard.find(`.small-movie-card`);
  card.simulate(`mouseenter`);
  expect(options.enterHandler).toHaveBeenCalledTimes(1);
  expect(options.enterHandler).toHaveBeenCalledWith(options.index);
});
