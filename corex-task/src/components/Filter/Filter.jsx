import React from 'react';
import './_filter.scss';
import { FilterButton } from '../buttons/FilterButton';

export const Filter = ({ language }) => {
  const textTranslate = {
    title: {
      ENG: 'SORT BY',
      РУС: 'СОРТИРОВАТЬ',
    },
    filterButtons: {
      ENG: ['By Manufacturer', 'Minimum price', 'Maximum price'],
      РУС: ['По производителю', 'По минимальной цене', 'По максимальной цене']
    }
  }

  const buttons = textTranslate.filterButtons[language].map(button => (
    <FilterButton key={button} name={button} />
  ))
  return (
    <div className="filter">
      <h2>{textTranslate.title[language]}</h2>
      {buttons}
    </div>
  )
}
