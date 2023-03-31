import { Middleware } from "redux";
import {IWsActions} from "../actions/websockets";

export const socketMiddleware = (
  url: () => string,
  actions: IWsActions): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    return (next) => {
      return (action) => {
        const { dispatch, getState } = store;
        const { type, value } = action;
        const { wsInit, onOpen, onClose, onError, onOrders } = actions;
        const { isAuth } = getState().auth;
        if (type === wsInit) {
          socket = new WebSocket(`${url()}${type === wsInit && value && isAuth ? `?token=${value}` : '' }`);
          if (socket) {
            socket.onopen = () => {
              dispatch({ type: onOpen });
            };
            socket.onerror = () => {
              dispatch({ type: onError });
            };
            socket.onmessage = (evt) => {
              const { data } = evt;
              const parsedData = JSON.parse(data);
              const { success } = parsedData;
              success && dispatch({ type: onOrders, value: parsedData });
            };
            socket.onclose = () => {
              dispatch({ type: onClose });
            }
          }
        }
        return next(action)
      }
    }
  }
}
