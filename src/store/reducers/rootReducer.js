import { combineReducers } from 'redux';
import saleListReducer from './saleListReducer';

export const rootReducer = combineReducers({
  mainPage: saleListReducer,
})
