import React from 'react';
import './_filter-button.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const FilterButton = (props) => {
  return (
    <Layout >
      <button className="filter-btn">
        {props.name}
      </button>
    </Layout>
  )
}
