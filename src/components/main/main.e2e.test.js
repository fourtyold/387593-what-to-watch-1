import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  moviesList: [
    {
      name: `Moonrise Kingdom`,
      page: `https://moonrise.html`,
      genre: `Adventure`,
      previewImage: `https://preview_1.jpg`,
      previewVideoLink: `https://preview_1.mp4`
    },
    {
      name: `Gangs of New York`,
      page: `https://gangs.html`,
      genre: `Crime`,
      previewImage: `https://preview_2.jpg`,
      previewVideoLink: `https://preview_2.mp4`
    }
  ],
  testClickHandler: jest.fn(),
  filterGenre: `All genres`,
  setFilter: jest.fn(),
  requireAuthorization: jest.fn(),
  delay: 1000,
  genresList: [`All genres`, `Crime`, `Adventure`],
  avatarUrl: null
};

it(`Click on login link works correctly`, () => {
  const main = mount(<Main
    moviesList={options.moviesList}
    cardHeaderClickHandler={options.testClickHandler}
    filterGenre={options.filterGenre}
    setFilter={options.setFilter}
    requireAuthorization={options.requireAuthorization}
    handlerDelay={options.delay}
    genresList={options.genresList}
    avatarUrl={options.avatarUrl}
  />);

  const loginLink = main.find(`.user-block__link`);
  loginLink.simulate(`click`);
  expect(options.requireAuthorization).toHaveBeenCalledTimes(1);
});
