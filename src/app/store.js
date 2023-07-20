// Import createStore and combineReducers here.
import { legacy_createStore as createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js'

// Create and export the store here.
export const store = createStore(combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
}))