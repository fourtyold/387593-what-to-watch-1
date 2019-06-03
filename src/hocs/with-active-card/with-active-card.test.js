import React from "react";
import renderer from "react-test-renderer";
import withActiveCard from "./with-active-card.js";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

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
  cardHeaderClickHandler: () => {},
};

it(`With-active-card renders correctly`, () => {
  const tree = renderer.create(<MockComponentWrapped
    film={options.film}
    cardHeaderClickHandler={options.cardHeaderClickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
