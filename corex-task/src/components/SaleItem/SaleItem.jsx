import React from 'react';
import './_sale-item.scss';
import { Layout } from '../../hoc/Layout/Layout';
import { translateMonth } from '../../data/translateMonth';

export const SaleItem = (props) => {

  const addItemCardHandler = (event) => {
    const target = event.target.closest('.item');
    if (!target.dataset.added) {
      target.dataset.added = true;
      props.addItemCartHandler()
    }
  };

  const translateMonthFunc = (language) => {
    const month = release.slice(0, 3)
    return translateMonth[language][month] + release.slice(3)
  }

  const {
    name, release, manufacturer, model, hash, algorithm,
    efficiency, profit, price, imageUrl
  } = props.data;

  const date = props.language === 'ENG' ? release : translateMonthFunc('РУС');

  return (
    <Layout>
      <div className="item" onClick={addItemCardHandler}>
        <p className="item__name">{name}</p>
        <span className="hide-md">{date}</span>
        <span className="hide-md">{manufacturer}</span>
        <span className="hide-md">{model}</span>
        <span>{hash}</span>
        <span className="hide-md">{algorithm}</span>
        <span className="hide-md">{efficiency}</span>
        <span className="hide-md">
          <span className="item__profit">{profit} </span>
           / {props.language === 'ENG' ? 'day' : 'день'}
        </span>
        <img alt="item" className="item__img" src={imageUrl} />
        <span className="item__price">{price}</span>
      </div>
    </Layout>
  )
}
