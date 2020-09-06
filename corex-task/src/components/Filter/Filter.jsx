import React from 'react';
import './_filter.scss';
import { FilterButton } from '../buttons/FilterButton';

export const Filter = () => {
  const filterButtons = ['By Manufacturer', 'Minimum price', 'Maximum price']
  const buttons = filterButtons.map(button => (
    <FilterButton key={button} name={button} />
  ))
  return (
      <div className="filter">
        <h2>SORT BY</h2>
        {buttons}
      </div>
  )
}
