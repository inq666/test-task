import React from 'react';
import './_header.scss';
import { ChangeLanguage } from './ChangeLanguage/ChangeLanguage';
import { ShoppingBasket } from './ShoppingBasket/ShoppingBasket';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" />
        <ChangeLanguage />
      </div>
      <ShoppingBasket />

    </header>
  )
}
