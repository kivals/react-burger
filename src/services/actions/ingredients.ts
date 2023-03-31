import axios from "axios";
import {GET_INGREDIENTS_URL} from "../../utils/consts";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants/ingredients";
import {TIngredient} from "../../utils/types";
import {AppDispatch} from "../types";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly value: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST
});

export const getIngredientsSuccessAction = (
  ingredients: TIngredient[]
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  value: ingredients,
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED
});

export const getIngredients = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientsAction());
  axios.get(GET_INGREDIENTS_URL).then(res => {
    if (res.data && res.data.success) {
      dispatch(getIngredientsSuccessAction(res.data.data));
    } else {
      dispatch(getIngredientsFailedAction());
    }
  })
}