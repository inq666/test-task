import React from 'react';
import './_sale-list.scss';
import { SaleItem } from '../SaleItem/SaleItem';
import { Layout } from '../../hoc/Layout/Layout';

export const SaleList = (props) => {
  const items = props.saleListItems.map(item => (
    <SaleItem data={item} />
  ));
  return (
    <div className="sale-list">
      <h2>ON SALE</h2>

      <Layout>
        <div className="list-header">
          <span>Release</span>
          <span>Manufacturer</span>
          <span>Model</span>
          <span>Hash</span>
          <span>Algorithm</span>
          <span>Efficiency</span>
          <span>Profit</span>
          <span>Price</span>
        </div>
      </Layout>
      <div className="list-items">
        {items}
      </div>
    </div>
  )
}
