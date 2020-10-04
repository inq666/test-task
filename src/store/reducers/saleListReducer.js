import {
  FETCH_SALE_LIST, ADD_ITEM_CART, CHANGE_LANGUAGE, SORT_BY_MIN,
  SORT_BY_MAX, SORT_BY_MANUFACTURER, SORT_BY_MANUFACTURER_REVERSE
} from "../actions/actionTypes";

const initialState = {
  saleListItems: [],
  itemInCartCounter: 0,
  language: 'ENG',
  sortByManufacturerStatus: false,
}

export default function saleListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SALE_LIST:
      return {
        ...state,
        saleListItems: action.saleListItems,
      }
    case ADD_ITEM_CART:

      return {
        ...state,
        itemInCartCounter: state.itemInCartCounter + 1,
        saleListItems: state.saleListItems.map((item) => {
          console.log(item.id, action.id)
          if (item.id === action.id) {
            item.added = true;
          }
          return item
        })
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: state.language === 'ENG' ? 'РУС' : 'ENG'
      }
    case SORT_BY_MAX:
      return {
        ...state,
        sortByManufacturerStatus: false,
        saleListItems: state.saleListItems.slice().sort((a, b) => (
          parseFloat(a.price.split(' ')[2].slice(1)) > parseFloat(b.price.split(' ')[2].slice(1)) ? -1 : 1
        )),
      }
    case SORT_BY_MIN:
      return {
        ...state,
        sortByManufacturerStatus: false,
        saleListItems: state.saleListItems.slice().sort((a, b) => (
          parseFloat(a.price.slice(1)) > parseFloat(b.price.slice(1)) ? 1 : -1
        )),
      }
    case SORT_BY_MANUFACTURER:
      return {
        ...state,
        sortByManufacturerStatus: true,
        saleListItems: state.saleListItems.slice().sort((a, b) => a.manufacturer > b.manufacturer ? 1 : -1),
      }
    case SORT_BY_MANUFACTURER_REVERSE:
      return {
        ...state,
        sortByManufacturerStatus: false,
        saleListItems: state.saleListItems.slice().sort((a, b) => a.manufacturer > b.manufacturer ? -1 : 1),
      }
    default:
      return state;
  }
}
