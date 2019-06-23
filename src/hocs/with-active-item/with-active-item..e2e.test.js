import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => (
  <div />
);
const MockComponentWrapped = withActiveItem(MockComponent);

it(`MockComponent should has correctly props, wrapper should has correctly state when calls onChange`, () => {
  const wrapper = mount(<MockComponentWrapped />);
  wrapper.find(MockComponent).prop(`onSelect`)(true);
  wrapper.update();
  expect(wrapper.find(MockComponent).prop(`activeItem`)).toEqual(true);
  expect(wrapper.state(`activeItem`)).toEqual(true);
});
