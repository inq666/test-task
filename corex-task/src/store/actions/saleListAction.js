import { FETCH_SALE_LIST, ADD_ITEM_CART, CHANGE_LANGUAGE, SORT_BY_MAX, SORT_BY_MIN, SORT_BY_MANUFACTURER, SORT_BY_MANUFACTURER_REVERSE } from './actionTypes';
import axios from 'axios';

/*thunk*/
export function fetchSaleList() {
  return async (dispatch) => {
    const response = await axios.get('https://corex-test.firebaseio.com/.json');
    const saleListItems = response.data.saleList.listItems;
    console.log(saleListItems)
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

export function addItemCart() {
  return {
    type: ADD_ITEM_CART,
  }
}

export function changeLanguage() {
  return {
    type: CHANGE_LANGUAGE,
  }
}

export function sortByMax () {
  return {
    type: SORT_BY_MAX,
  }
}

export function sortByMin() {
  return {
    type: SORT_BY_MIN,
  }
}

export function sortByManufacturer() {
  return {
    type: SORT_BY_MANUFACTURER,
  }
}

export function sortByManufacturerReverse() {
  return {
    type: SORT_BY_MANUFACTURER_REVERSE,
  }
}
