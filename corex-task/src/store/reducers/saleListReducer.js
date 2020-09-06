import { FETCH_SALE_LIST, ADD_ITEM_CART } from "../actions/actionTypes";

const initialState = {
  saleListItems: [],
  itemInCartCounter: 0,
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
    default:
      return state;
  }
}
