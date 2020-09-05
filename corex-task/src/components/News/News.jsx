import React from 'react';
import './_news.scss';

export const News = () => {
  return (
    <article className="news">
      <h2>NEWS</h2>
      <div className="news__banner">
        <div className="banner__title-img" />
        <h3 className="banner__title">HASH<span>ONE</span></h3>
        <p className="banner__tagline">The standard for crypto consulting</p>
        <div className="banner__description">
          <span> Mining Operations</span>
          <span> ICO (Initial Coin Offering)</span>
          <span>New Business Investment</span>
          <span>Blockchain Technology</span>
        </div>
        <div className="banner__img" />
        <div className="banner__control"/>
      </div>
    </article >
  )
}
