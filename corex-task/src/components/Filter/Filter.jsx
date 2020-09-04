import React from 'react';
import './_filter.scss';
import { FilterButton } from '../buttons/FilterButton';

export const Filter = () => {
  const filterButtons = ['By Manufacturer', 'Minimum price', 'Maximum price']
  const buttons = filterButtons.map(button => (
    <FilterButton name={button} />
  ))
  return (
      <div className="filter">
        <h1>SORT BY</h1>
        {buttons}
      </div>
  )
}
