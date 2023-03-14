import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

/*declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);*/

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(
      thunk,
    )
  )
);

export default store;