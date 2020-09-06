import { FETCH_SALE_LIST } from "../actions/actionTypes";

const initialState = {
  saleListItems: [],
}

export default function saleListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SALE_LIST:
      return {
        saleListItems: action.saleListItems,
      }
    default:
      return state;
  }
}
