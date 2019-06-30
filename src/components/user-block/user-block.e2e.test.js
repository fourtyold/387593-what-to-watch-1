import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {UserBlock} from "./user-block.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  avatarUrl: `avatar`,
  getFavoritesList: jest.fn()
};

it(`On avatar click calls handler`, () => {
  const userBlock = shallow(
      <UserBlock
        avatarUrl={options.avatarUrl}
        getFavoritesList={options.getFavoritesList}
      />
  );

  userBlock.find(`.user-block__avatar`).simulate(`click`);
  expect(options.getFavoritesList).toHaveBeenCalledTimes(1);
});
