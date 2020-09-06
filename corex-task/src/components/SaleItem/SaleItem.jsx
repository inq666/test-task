import React from 'react';
import './_sale-item.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const SaleItem = (props) => {
  return (
    <Layout>
      <div className="item">
        <p className="item__name">{props.data.name}</p>
        <span className="hide-md">{props.data.release}</span>
        <span className="hide-md">{props.data.manufacturer}</span>
        <span className="hide-md">{props.data.model}</span>
        <span>{props.data.hash}</span>
        <span className="hide-md">{props.data.algorithm}</span>
        <span className="hide-md">{props.data.efficiency}</span>
        <span className="hide-md">{props.data.profit}</span>
        <img alt="item" className="item__img" src={props.data.imageUrl} />
        <span className="item__price">{props.data.price}</span>
      </div>
    </Layout>
  )
}
