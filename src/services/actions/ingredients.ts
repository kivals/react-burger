import axios from "axios";
import {GET_INGREDIENTS_URL} from "../../utils/consts";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants/ingredients";
import {TRawIngredient} from "../../utils/types";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly value: TRawIngredient;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction



export const getIngredients = () => (dispatch) => {
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