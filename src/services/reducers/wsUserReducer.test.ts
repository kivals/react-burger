import {initialState as state, wsUserReducer as reducer} from "./wsUserReducer";
import {
  WS_CONNECTION_CLOSED_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_GET_ORDERS_USER
} from "../constants/websockets";
import {wsUserOrderServerDataTest} from "../../utils/const-test";

describe('wsUserReducer test', () => {
  it('should handle WS_CONNECTION_SUCCESS', function () {
    expect(reducer(state, {type: WS_CONNECTION_SUCCESS_USER}))
      .toEqual({...state, wsConnection: true});
  });
  it('should handle WS_CONNECTION_ERROR_USER', function () {
    expect(reducer(state, {type: WS_CONNECTION_ERROR_USER}))
      .toEqual({...state, wsConnection: false});
  });
  it('should handle WS_CONNECTION_CLOSED_USER', function () {
    expect(reducer(state, {type: WS_CONNECTION_CLOSED_USER}))
      .toEqual({...state, wsConnection: false, orders: []});
  });
  it('should handle WS_GET_ORDERS_USER', function () {
    expect(reducer(state, {type: WS_GET_ORDERS_USER, value: wsUserOrderServerDataTest}))
      .toEqual({...state, wsConnection: false, orders: [...wsUserOrderServerDataTest.orders]});
  });
});