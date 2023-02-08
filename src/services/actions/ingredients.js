import axios from "axios";
import {GET_INGREDIENTS_URL} from "../../utils/consts";
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => (dispatch) => {
  console.log('getIngredients')
  dispatch({
    type: GET_INGREDIENTS_REQUEST
  });
  axios.get(GET_INGREDIENTS_URL).then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        value: res.data.data
      });
    } else {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      });
    }
  })
}