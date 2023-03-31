import {orderReducer as reducer, initialState as state} from "./orderReducer";
import {CLEAR_ORDER, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../constants/order";
import {orderDataTest} from "../../utils/const-test";

describe('orderReducer test', () => {
  it('should handle ORDER_REQUEST', function () {
    expect(reducer(state, {type: ORDER_REQUEST}))
      .toEqual({...state, isLoading: true});
  });
  it('should handle ORDER_FAILED', function () {
    expect(reducer(state, {type: ORDER_FAILED}))
      .toEqual({...state, hasError: true});
  });
  it('should handle ORDER_SUCCESS', function () {
    expect(reducer(state, {type: ORDER_SUCCESS, value: orderDataTest}))
      .toEqual({
        ...state,
        orderInfo: orderDataTest,
        isLoading: false,
        hasError: false,
      });
  });
  it('should handle CLEAR_ORDER', function () {
    expect(reducer(state, {type: CLEAR_ORDER})).toEqual(state);
  });
});