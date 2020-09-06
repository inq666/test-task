import React from 'react';
import { ChangeLanguage } from '../../components/ChangeLanguage/ChangeLanguage';
import { ShoppingBasket } from '../../components/ShoppingBasket/ShoppingBasket';
import { changeLanguage } from '../../store/actions/saleListAction';
import { useSelector, useDispatch } from 'react-redux';
import './_header.scss';



export const Header = () => {
  const itemInCartCounter = useSelector(state => state.mainPage.itemInCartCounter)
  const language = useSelector(state => state.mainPage.language)
  const dispatch = useDispatch();
  const changeLanguageHandler = () => {
    dispatch(changeLanguage())
  }

  return (
    <header className="header">
      <span className="filter-menu" />
      <div className="header__container">
        <div className="header__logo" />
        <ChangeLanguage language={language} changeLanguageHandler={changeLanguageHandler} />
      </div>
      <ShoppingBasket itemInCartCounter={itemInCartCounter} />
    </header>
  )
}


