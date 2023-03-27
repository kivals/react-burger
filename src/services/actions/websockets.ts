import {
  WS_CONNECTION_CLOSED, WS_CONNECTION_CLOSED_USER,
  WS_CONNECTION_ERROR, WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_START, WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS, WS_CONNECTION_SUCCESS_USER, WS_GET_ORDERS, WS_GET_ORDERS_USER
} from "../constants/websockets";
import {TOrders, TUserOrders} from "../../utils/types";

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS,
  readonly value: TOrders
}

export interface IWsConnectionStartUser {
  readonly type: typeof WS_CONNECTION_START_USER
}

export interface IWsConnectionSuccessUser {
  readonly type: typeof WS_CONNECTION_SUCCESS_USER
}

export interface IWsConnectionErrorUser {
  readonly type: typeof WS_CONNECTION_ERROR_USER
}

export interface IWsConnectionClosedUser {
  readonly type: typeof WS_CONNECTION_CLOSED_USER
}

export interface IWsGetOrdersUser {
  readonly type: typeof WS_GET_ORDERS_USER,
  readonly value: TUserOrders
}

export const wsConnectionStart = (): IWsConnectionStart => {
  return {
    type: WS_CONNECTION_START
  };
};

export const wsConnectionSuccess = (): IWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = (): IWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetOrderds = (payload: TOrders): IWsGetOrders => {
  return {
    type: WS_GET_ORDERS,
    value: payload,
  };
};

export const wsConnectionStartUser = (): IWsConnectionStartUser => {
  return {
    type: WS_CONNECTION_START_USER
  };
};

export const wsConnectionSuccessUser = (): IWsConnectionSuccessUser => {
  return {
    type: WS_CONNECTION_SUCCESS_USER
  };
};

export const wsConnectionErrorUser = (): IWsConnectionErrorUser => {
  return {
    type: WS_CONNECTION_ERROR_USER
  };
};

export const wsConnectionClosedUser = (): IWsConnectionClosedUser => {
  return {
    type: WS_CONNECTION_CLOSED_USER
  };
};

export const wsGetOrderdsUser = (payload: TUserOrders): IWsGetOrdersUser => {
  return {
    type: WS_GET_ORDERS_USER,
    value: payload,
  };
};

export type TWsActions =
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetOrders;

export type TWSUserActions =
  | IWsConnectionStartUser
  | IWsConnectionSuccessUser
  | IWsConnectionErrorUser
  | IWsConnectionClosedUser
  | IWsGetOrdersUser

export interface IWsActions {
  readonly wsInit: string
  readonly onOpen: string
  readonly onClose: string
  readonly onError: string
  readonly onOrders: string
}

export const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrders: WS_GET_ORDERS
};

export const wsActionsUser: IWsActions = {
  wsInit: WS_CONNECTION_START_USER,
  onOpen: WS_CONNECTION_SUCCESS_USER,
  onClose: WS_CONNECTION_CLOSED_USER,
  onError: WS_CONNECTION_ERROR_USER,
  onOrders: WS_GET_ORDERS_USER
};

