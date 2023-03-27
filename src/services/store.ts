import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {socketMiddleware} from "./middleware/websocket";
import {WS_URL} from "../utils/consts";
import {wsActions, wsActionsUser} from "./actions/websockets";

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware(() => WS_URL + '/all', wsActions),
      socketMiddleware(() => WS_URL + `?token=${localStorage.getItem('token')}`, wsActionsUser),
    )
  )
);

export default store;