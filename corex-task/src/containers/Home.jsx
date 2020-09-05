import React, { Component } from 'react';
import { Header } from '../components/Header/Header';
import { Filter } from '../components/Filter/Filter';
import './_home.scss';
import { SaleList } from '../components/OnSaleList/SaleList';
import { News } from '../components/News/News';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Filter />
          <SaleList />
          <News />
        </main>
      </React.Fragment>
    )
  }
}

export default Home;
