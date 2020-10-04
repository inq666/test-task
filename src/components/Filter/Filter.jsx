import React from 'react';
import './_filter.scss';
import { FilterButton } from '../buttons/FilterButton';
import { translateFilter } from '../../data/translateFilter';

export const Filter = ({ language, sortDataHandler }) => {

  const buttons = translateFilter.filterButtons[language].map(button => (
    <FilterButton
      key={button.id}
      id={button.id}
      name={button.name}
      sortDataHandler={sortDataHandler} />
  ))

  return (
    <div className="filter">
      <h2>11111111111111</h2>
      {buttons}
    </div>
  )
}
