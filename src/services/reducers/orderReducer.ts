import {CLEAR_ORDER, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../constants/order";
import {TOrderActions} from "../actions/order";
import {TRawOrder} from "../../utils/types";

export interface IOrderState {
    orderInfo: TRawOrder | null,
    isLoading: boolean,
    hasError: boolean,
}


const initialState: IOrderState = {
  orderInfo: null,
  isLoading: false,
  hasError: false,
}

export const orderReducer = (
  state = initialState,
  action: TOrderActions): IOrderState => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case ORDER_SUCCESS: {
      return {
        ...state,
        orderInfo: action.value,
        isLoading: false,
        hasError: false,
      }
    }

    case ORDER_FAILED: {
      return {
        ...initialState,
        hasError: true,
      };
    }

    case CLEAR_ORDER: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}