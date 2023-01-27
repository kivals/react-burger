import axios from "axios";
import {POST_ORDER_URL} from "../../utils/consts";
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const getOrderData = (body) => (dispatch) => {
  dispatch({
    type: ORDER_REQUEST
  });
  axios.post(POST_ORDER_URL, body).then(({ data }) => {
    if (data && data.success) {
      dispatch({
        type: ORDER_SUCCESS,
        value: {
          name: data.name,
          number: data.order.number,
        }
      });
    } else {
      dispatch({
        type: ORDER_FAILED
      });
    }
  })
}
