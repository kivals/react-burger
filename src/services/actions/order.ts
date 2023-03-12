import axios from "axios";
import {POST_ORDER_URL} from "../../utils/consts";
import {ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../constants/order";
import {TIngredient, TRawOrder} from "../../utils/types";
import {AppDispatch, AppThunk} from "../types";

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

export const getOrderData: AppThunk = (ingredients: TIngredient[]) => (dispatch: AppDispatch) => {
  dispatch(getOrderDataAction());
  axios.post(POST_ORDER_URL, {ingredients}).then(({ data }) => {
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
