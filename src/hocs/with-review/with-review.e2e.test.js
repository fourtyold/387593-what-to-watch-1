import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {withReview} from "./with-review.js";

Enzyme.configure({adapter: new Adapter()});

const options = {
  reviewHandler: jest.fn,
  ratingHandler: jest.fn,
  formSubmitHandler: jest.fn(),
  isEnabled: false,
  sendReview: jest.fn(),
  match: {
    params: {
      id: 1
    }
  }
};

const MockComponent = (props) => (
  <div>
    <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={props.reviewHandler}></textarea>
    <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={props.ratingHandler}/>
    <button className="add-review__btn" type="submit" disabled={!props.isEnabled} onClick={props.formSubmitHandler}>Post</button>
  </div>
);

MockComponent.propTypes = {
  reviewHandler: PropTypes.func.isRequired,
  ratingHandler: PropTypes.func.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired
};

const MockComponentWrapped = withReview(MockComponent);

it(`Text area input changes state`, () => {
  const addReview = mount(<MockComponentWrapped
    reviewHandler={options.reviewHandler}
    ratingHandler={options.ratingHandler}
    formSubmitHandler={options.formSubmitHandler}
    isEnabled={options.isEnabled}
    sendReview={options.sendReview}
  />
  );

  addReview.find(`.add-review__textarea`).simulate(`change`, {target: {value: `some_review`}});
  expect(addReview.state().review).toEqual(`some_review`);
});

it(`Radio btn input changes state`, () => {
  const addReview = mount(<MockComponentWrapped
    reviewHandler={options.reviewHandler}
    ratingHandler={options.ratingHandler}
    formSubmitHandler={options.formSubmitHandler}
    isEnabled={options.isEnabled}
    sendReview={options.sendReview}
  />
  );

  addReview.find(`.rating__input`).simulate(`change`, {target: {checked: true, value: 1}});
  expect(addReview.state().rating).toEqual(1);
});
