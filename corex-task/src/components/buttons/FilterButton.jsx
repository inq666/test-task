import React from 'react';
import './_filter-button.scss';

export const FilterButton = (props) => {
  return (
    <button className="filter-btn">
      {props.name}
      <span className="left-top-corner" />
      <span className="right-top-corner" />
      <span className="left-bottom-corner" />
      <span className="right-bottom-corner" />
    </button>
  )
}
