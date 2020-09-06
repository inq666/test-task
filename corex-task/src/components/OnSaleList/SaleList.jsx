import React from 'react';
import './_sale-list.scss';
import { SaleItem } from '../SaleItem/SaleItem';

export const SaleList = () => {
  return (
    <div className="sale-list">
      <h2>ON SALE</h2>

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

      <div className="list-items">
        <SaleItem />
      </div>
    </div>
  )
}
