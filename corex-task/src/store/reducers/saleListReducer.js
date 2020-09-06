import { FETCH_SALE_LIST, ADD_ITEM_CART, CHANGE_LANGUAGE } from "../actions/actionTypes";

const initialState = {
  saleListItems: [],
  itemInCartCounter: 0,
  language: 'ENG'
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
      }
      case CHANGE_LANGUAGE:
        return {
          ...state,
          language: state.language === 'ENG' ? 'РУС' : 'ENG'
        }
    default:
      return state;
  }
}
