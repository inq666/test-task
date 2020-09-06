import React from 'react';
import './_sale-item.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const SaleItem = (props) => {
  const addItemCardHandler = (event) => {
    const target = event.target.closest('.item');
    if (!target.dataset.added) {
      target.dataset.added = true;
      props.addItemCart()
    }
  }
  const {
    name, release, manufacturer, model, hash, algorithm,
    efficiency, profit, price, imageUrl
  } = props.data
  return (
    <Layout>
      <div className="item" onClick={addItemCardHandler}>
        <p className="item__name">{name}</p>
        <span className="hide-md">{release}</span>
        <span className="hide-md">{manufacturer}</span>
        <span className="hide-md">{model}</span>
        <span>{hash}</span>
        <span className="hide-md">{algorithm}</span>
        <span className="hide-md">{efficiency}</span>
        <span className="hide-md"><span className="item__profit">{profit}</span> / day</span>
        <img alt="item" className="item__img" src={imageUrl} />
        <span className="item__price">{price}</span>
      </div>
    </Layout>
  )
}
