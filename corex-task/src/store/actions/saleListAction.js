import { FETCH_SALE_LIST } from './actionTypes';
import axios from 'axios';

/*thunk*/
export function fetchSaleList() {
  return async (dispatch) => {
    const response = await axios.get('https://corex-test.firebaseio.com/.json');
    const saleListItems = response.data.saleList.listItems;
    dispatch(fetchSaleListCompleted(saleListItems));
  }
}

/*Action Creators*/
export function fetchSaleListCompleted(saleListItems) {
  return {
    type: FETCH_SALE_LIST,
    saleListItems
  }
}
