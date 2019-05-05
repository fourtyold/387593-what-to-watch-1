import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Click on card header works correctly`, () => {
  const testClickHandler = jest.fn();
  const app = shallow(<App
    moviesList = {[`test_1`, `test_2`, `test_3`, `test_4`]}
    cardHeaderClickHandler = {testClickHandler}
  />);

  const cardHeader = app.find(`.small-movie-card__title`);
  cardHeader.at(0).simulate(`click`);
  expect(testClickHandler).toHaveBeenCalledTimes(1);
});
