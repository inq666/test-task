import React from './node_modules/react';
import './node_modules/_/filter.scss';

export const Filter = () => {
  return (
    <React.Fragment>
      <h1>SORT BY</h1>
      <button>By Manufacturer</button>
      <button>Minimum price</button>
      <button>Maximum price</button>
    </React.Fragment>
  )
}
