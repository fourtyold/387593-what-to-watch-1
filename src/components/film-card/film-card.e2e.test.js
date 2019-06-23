import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  film: {
    id: 1,
    name: `Moonrise Kingdom`,
    page: `https://moonrise.html`,
    genre: `Adventure`,
    previewImage: `https://preview_1.jpg`,
    previewVideoLink: `https://preview_1.mp4`
  },
  leaveHandler: jest.fn(),
  enterHandler: jest.fn(),
  isPlaying: true,
  muted: true
};

it(`Handler is called on card hover`, () => {
  const filmCard = shallow(<FilmCard
    film={options.film}
    onEnter={options.enterHandler}
    onLeave={options.leaveHandler}
    isPlaying={options.isPlaying}
    muted={options.muted}
  />);

  const card = filmCard.find(`.small-movie-card`);
  card.simulate(`mouseenter`);
  expect(options.enterHandler).toHaveBeenCalledTimes(1);
  card.simulate(`mouseleave`);
  expect(options.leaveHandler).toHaveBeenCalledTimes(1);
});
