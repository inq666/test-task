import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Header } from '../Header/Header';
import { Filter } from '../../components/Filter/Filter';
import './_main-page.scss';
import { SaleList } from '../../components/OnSaleList/SaleList';
import { News } from '../../components/News/News';
import { Footer } from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import {
  fetchSaleList, addItemCart, sortByMax,
  sortByMin, sortByManufacturer, sortByManufacturerReverse
} from '../../store/actions/saleListAction';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchSaleList();
  }

  addItemCartHandler() {
    this.props.addItemCart();
  }

  sortDataHandler(id) {
    if (id === 'min') {
      this.props.sortByMin();
    } else if (id === 'max') {
      this.props.sortByMax();
    } else if (id === 'manufacturer' && !this.props.sortByManufacturerStatus) {
      this.props.sortByManufacturer();
    } else if (id === 'manufacturer' && this.props.sortByManufacturerStatus) {
      this.props.sortByManufacturerReverse();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Filter
            sortDataHandler={(id) => this.sortDataHandler(id)}
            language={this.props.language}
          />
          <SaleList
            language={this.props.language}
            saleListItems={this.props.saleListItems}
            addItemCartHandler={() => this.addItemCartHandler()} />
          <News
            language={this.props.language}
          />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    saleListItems: state.mainPage.saleListItems,
    language: state.mainPage.language,
    sortByManufacturerStatus: state.mainPage.sortByManufacturerStatus,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSaleList: bindActionCreators(fetchSaleList, dispatch),
    addItemCart: bindActionCreators(addItemCart, dispatch),
    sortByMax: bindActionCreators(sortByMax, dispatch),
    sortByMin: bindActionCreators(sortByMin, dispatch),
    sortByManufacturer: bindActionCreators(sortByManufacturer, dispatch),
    sortByManufacturerReverse: bindActionCreators(sortByManufacturerReverse, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
