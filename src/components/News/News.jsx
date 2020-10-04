import React from 'react';
import './_news.scss';
import { Layout } from '../../hoc/Layout/Layout';

export const News = ({language}) => {
  return (

    <article className="news">
      <h2>{language === 'ENG' ? 'NEWS' : 'НОВОСТИ'}</h2>
      <Layout>
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
          <div className="banner__control" />
        </div>
      </Layout>
    </article >
  )
}
