import React, { Component } from 'react';
import { Header } from '../components/Header/Header';
import { Filter } from '../components/Filter/Filter';
import './_home.scss';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Filter />
        </main>
      </React.Fragment>
    )
  }
}

export default Home;
