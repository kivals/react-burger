import {initialState as state, wsReducer as reducer} from "./wsReducer";
import {WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_ORDERS} from "../constants/websockets";

describe('orderReducer test', () => {
  it('should handle WS_CONNECTION_SUCCESS', function () {
    expect(reducer(state, {type: WS_CONNECTION_SUCCESS}))
      .toEqual({...state, wsConnection: true});
  });
  it('should handle WS_CONNECTION_ERROR', function () {
    expect(reducer(state, {type: WS_CONNECTION_ERROR}))
      .toEqual({...state, wsConnection: false});
  });
  it('should handle WS_CONNECTION_CLOSED', function () {
    expect(reducer(state, {type: WS_CONNECTION_CLOSED})).toEqual(state);
  });
});