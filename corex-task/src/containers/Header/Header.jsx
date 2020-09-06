import React from 'react';
import { ChangeLanguage } from '../../components/ChangeLanguage/ChangeLanguage';
import { ShoppingBasket } from '../../components/ShoppingBasket/ShoppingBasket';
import { connect, useSelector } from 'react-redux';
import './_header.scss';


export const Header = () => {
  const itemInCartCounter = useSelector(state => state.saleList.itemInCartCounter)

  const changeLanguageHandler = () => {
    console.log('done')
  }

  return (
    <header className="header">
      <span className="filter-menu" />
      <div className="header__container">
        <div className="header__logo" />
        <ChangeLanguage changeLanguageHandler={changeLanguageHandler} />
      </div>
      <ShoppingBasket itemInCartCounter={itemInCartCounter} />
    </header>
  )
}


