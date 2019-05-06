import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  moviesList: [`test_1`, `test_2`, `test_3`, `test_4`],
  testClickHandler: jest.fn()
};

it(`Click on card header works correctly`, () => {
  const app = shallow(<App
    moviesList = {options.moviesList}
    cardHeaderClickHandler = {options.testClickHandler}
  />);

  const cardHeader = app.find(`.small-movie-card__title`);
  cardHeader.at(0).simulate(`click`);
  expect(options.testClickHandler).toHaveBeenCalledTimes(1);
});
