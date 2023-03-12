// @ts-ignore
import {v4 as uuidv4} from "uuid";
import {getTimeStamp} from "../../utils/utils";
import {ADD_CONSTRUCTOR_INGREDIENT} from "../constants/burgerConstructor";
import {TIngredient, TRawIngredient} from "../../utils/types";

export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT,
  readonly value: TRawIngredient
}

export type TBurgerConstructorActions =
  | IAddConstructorIngredient;


export const addIngredientToConstructor = (ingredient: TRawIngredient) => (dispatch) => {
  const preparedIngredient: TIngredient = {
    ...ingredient,
    key: uuidv4(),
    order: getTimeStamp(),
  }

  dispatch({
    type: ADD_CONSTRUCTOR_INGREDIENT,
    value: preparedIngredient,
  })
}