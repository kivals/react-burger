import {CLEAR_ORDER, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../constants/order";
import {TRawOrder} from "../../utils/types";
import {AppDispatch} from "../types";
import authService from "../auth.service";

export interface IOrderRequestAction {
  readonly type: typeof ORDER_REQUEST;
}

export interface IOrderSuccessAction {
  readonly type: typeof ORDER_SUCCESS;
  readonly value: TRawOrder;
}

export interface IOrderFailedAction {
  readonly type: typeof ORDER_FAILED;
}

export interface IClearOrderAction {
  readonly type: typeof CLEAR_ORDER;
}

export const getOrderDataAction = (): IOrderRequestAction => ({
  type: ORDER_REQUEST
});

export const getOrderDataSuccessAction = (order: TRawOrder): IOrderSuccessAction => ({
  type: ORDER_SUCCESS,
  value: order,
});

export const getOrderDataFailedAction = (): IOrderFailedAction => ({
  type: ORDER_FAILED
});

export type TOrderActions =
  | IOrderRequestAction
  | IOrderSuccessAction
  | IOrderFailedAction
  | IClearOrderAction

export const getOrderData = (ingredientsIds: string[]) => (dispatch: AppDispatch) => {
  dispatch(getOrderDataAction());
  authService.postOrder(ingredientsIds).then(({ data }) => {
    if (data && data.success) {
      dispatch(getOrderDataSuccessAction({
        name: data.name,
        number: data.order.number
      }));
    } else {
      dispatch(getOrderDataFailedAction());
    }
  })
}
