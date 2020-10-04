import React from 'react';
import './_filter-button.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const FilterButton = ({ name, sortDataHandler, id }) => {
  return (
    <Layout >
      <button
        className="filter-btn"
        id={id}
        onClick={(event) => sortDataHandler(event.target.id)}>
        {name}
      </button>
    </Layout>
  )
}
