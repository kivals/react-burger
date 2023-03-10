import {CLEAR_ORDER, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../actions/order";

const initialState = {
  orderInfo: null,
  isLoading: false,
  hasError: false,
}

export const orderReducer = (state = initialState, action) => {
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