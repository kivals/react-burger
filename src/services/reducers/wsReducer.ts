import {TOrder} from "../../utils/types";
import {TWsActions} from "../actions/websockets";
import {WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_ORDERS} from "../constants/websockets";

interface IWsState {
  wsConnection: boolean,
  orders: TOrder[],
  total: null | number,
  totalToday: null | number
}

const initialState: IWsState = {
  wsConnection: false,
  orders: [],
  total: null,
  totalToday: null
}

export const wsReducer = (
  state = initialState,
  action: TWsActions): IWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnection: true
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnection: false
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnection: false,
        orders: [],
        total: null,
        totalToday: null
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        orders: action.value.orders,
        total: action.value.total,
        totalToday: action.value.totalToday

      };
    }
    default:
      return state
  }
}