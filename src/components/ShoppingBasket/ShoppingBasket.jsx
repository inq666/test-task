import React from 'react';

import './_shopping-basket.scss';

export const ShoppingBasket = ({ itemInCartCounter }) => {
  return (
    <div className="shopping-basket">
      <span className="counter">{itemInCartCounter}</span>
    </div>
  )
}

