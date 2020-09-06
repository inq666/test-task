import React from 'react';
import './_sale-list.scss';
import { SaleItem } from '../SaleItem/SaleItem';
import { Layout } from '../../hoc/Layout/Layout';
import { translateSaleList } from '../../data/translateSaleList';

export const SaleList = ({ saleListItems, addItemCartHandler, language }) => {

  const items = saleListItems.map((item, index) => (
    <SaleItem
      language={language}
      key={index + item.name}
      data={item}
      addItemCartHandler={addItemCartHandler} />
  ));

  const headerTitles = translateSaleList.headerTitle[language].map((title) => (
    <span key={title}>{title}</span>
  ));
  return (
    <div className="sale-list">
      <h2>{translateSaleList.title[language]}</h2>
      <Layout>
        <div className="list-header">
          {headerTitles}
        </div>
      </Layout>
      <div className="list-items">
        {items}
      </div>
    </div>
  )
}
