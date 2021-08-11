import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import { getAllProductsReducer } from "./productReducers";

import { cartReducers } from "./cartReducers";

import { sortProductsReducer } from "./sortReducers";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,

  GetAllProducts: getAllProductsReducer,
  Cart: cartReducers,
  sortedProducts: sortProductsReducer,
});

export default rootReducer;
