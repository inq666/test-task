import React from 'react';
import './_sale-list.scss';
import { SaleItem } from '../SaleItem/SaleItem';
import { Layout } from '../../hoc/Layout/Layout';

export const SaleList = ({ saleListItems, addItemCart, language }) => {

  const items = saleListItems.map((item, index) => (
    <SaleItem
      language={language}
      key={index + item.name}
      data={item}
      addItemCart={addItemCart} />
  ));

  const textTranslate = {
    title: {
      ENG: 'ON SALE',
      РУС: 'В ПРОДАЖЕ',
    },
    headerTitle: {
      ENG: ['Release', 'Manufacturer', 'Model', 'Hash', 'Algorithm', 'Efficiency', 'Profit', 'Price',],
      РУС: ['Выпуск', 'Изготовитель', 'Модель', 'Хэш', 'Алгоритм', 'КПД', 'Прибыль', 'Цена',]
    }
  }

  const headerTitles = textTranslate.headerTitle[language].map((title) => (
    <span key={title}>{title}</span>
  ));
  return (
    <div className="sale-list">
      <h2>{textTranslate.title[language]}</h2>
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
