import React from "react";
import PropTypes from "prop-types";

import {TabsTypes, tabsNames} from "../../constants.js";
import OverviewTab from "../overview-tab/overview-tab.jsx";
import DetailsTab from "../details-tab/details-tab.jsx";

const MovieTabs = (props) => {
  const tabsItems = tabsNames.map((tabName, i) => {
    let className = `movie-nav__item`;
    if (tabName === props.activeItem || i === 0 && !props.activeItem.length) {
      className += ` movie-nav__item--active`;
    }
    return <li key={tabName} className={className}>
      <a href="#" className="movie-nav__link" onClick={(evt) => {
        evt.preventDefault();
        props.onSelect(tabName);
      }}>{tabName}</a>
    </li>;
  });

  let contentBlock;
  switch (props.activeItem) {
    case TabsTypes.DETAILS:
      contentBlock = <DetailsTab film={props.film}/>;
      break;
    case TabsTypes.REVIEWS:
      contentBlock = <DetailsTab film={props.film}/>;
      break;
    default:
      contentBlock = <OverviewTab film={props.film}/>;
  }

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabsItems}
      </ul>
    </nav>
    {contentBlock}
  </div>;
};

MovieTabs.propTypes = {
  onSelect: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
  }).isRequired
};

export default MovieTabs;
