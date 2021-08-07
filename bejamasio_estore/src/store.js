import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";


import {
    getAllProductsReducer,
} from "./reducers/productReducers";


const reducer = combineReducers({
  bejamasProducts: getAllProductsReducer,
});



const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;
