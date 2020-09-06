import React from 'react';
import './_change-language.scss';

export const ChangeLanguage = ({ changeLanguageHandler }) => {

  const onClickHandler = () => {
    changeLanguageHandler()
  }

  return (
    <button className="change-language-btn" onClick={onClickHandler}>ENG</button>
  )
}
