import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Header } from '../components/Header/Header';
import { Filter } from '../components/Filter/Filter';
import './_home.scss';
import { SaleList } from '../components/OnSaleList/SaleList';
import { News } from '../components/News/News';
import { Footer } from '../components/Footer/Footer';
import { fetchSaleList } from '../store/actions/saleListAction';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
   this.props.fetchSaleList();
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Filter />
          <SaleList saleListItems={this.props.saleListItems}/>
          <News />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    saleListItems: state.saleList.saleListItems,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSaleList: bindActionCreators(fetchSaleList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
