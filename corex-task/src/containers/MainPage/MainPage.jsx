import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Header } from '../Header/Header';
import { Filter } from '../../components/Filter/Filter';
import './_main-page.scss';
import { SaleList } from '../../components/OnSaleList/SaleList';
import { News } from '../../components/News/News';
import { Footer } from '../../components/Footer/Footer';
import { fetchSaleList, addItemCart } from '../../store/actions/saleListAction';
import { connect } from 'react-redux';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchSaleList();
  }

  addItemCart() {
    this.props.addItemCart();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Filter />
          <SaleList
            saleListItems={this.props.saleListItems}
            addItemCart={() => this.addItemCart()} />
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
    fetchSaleList: bindActionCreators(fetchSaleList, dispatch),
    addItemCart: bindActionCreators(addItemCart, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
