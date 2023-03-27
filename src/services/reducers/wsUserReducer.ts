import {TOrder} from "../../utils/types";
import {TWSUserActions} from "../actions/websockets";
import {
  WS_CONNECTION_CLOSED_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_GET_ORDERS_USER
} from "../constants/websockets";

interface IWsUserState {
  wsConnection: boolean,
  orders: TOrder[]
}

const initialState: IWsUserState = {
  wsConnection: false,
  orders: []
}

export const wsUserReducer = (
  state = initialState,
  action: TWSUserActions): IWsUserState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_USER: {
      return {
        ...state,
        wsConnection: true
      };
    }
    case WS_CONNECTION_ERROR_USER: {
      return {
        ...state,
        wsConnection: false
      };
    }
    case WS_CONNECTION_CLOSED_USER: {
      return {
        ...state,
        wsConnection: false,
        orders: []
      };
    }
    case WS_GET_ORDERS_USER: {
      return {
        ...state,
        orders: action.value.orders
      };
    }
    default:
      return state
  }
}