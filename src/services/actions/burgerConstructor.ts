// @ts-ignore
import {v4 as uuidv4} from "uuid";
import {getTimeStamp} from "../../utils/utils";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT
} from "../constants/burgerConstructor";
import {TBunIngredient, TIngredient, TRawIngredient} from "../../utils/types";
import {AppDispatch} from "../types";

export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT,
  readonly value: TIngredient | TBunIngredient,
}

export interface IDeleteConstructorIngredient {
  readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT,
  readonly value: string,
}

export interface ISortConstructorIngredient {
  readonly type: typeof SORT_CONSTRUCTOR_INGREDIENT,
  readonly value: [TIngredient, TIngredient],
}

export const addIngredient2Constructor = (ingredient: TIngredient | TBunIngredient): IAddConstructorIngredient => ({
  type: ADD_CONSTRUCTOR_INGREDIENT,
  value: ingredient,
})

export const deleteIngredient2Constructor = (key: string): IDeleteConstructorIngredient => ({
  type: DELETE_CONSTRUCTOR_INGREDIENT,
  value: key,
})

export const sortIngredient2Constructor = (sort: [TIngredient, TIngredient]): ISortConstructorIngredient => ({
  type: SORT_CONSTRUCTOR_INGREDIENT,
  value: sort,
})

export type TBurgerConstructorActions =
  | ISortConstructorIngredient
  | IDeleteConstructorIngredient
  | IAddConstructorIngredient;


export const addIngredientToConstructor = (ingredient: TRawIngredient) => (dispatch: AppDispatch) => {
  const preparedIngredient: TIngredient = {
    ...ingredient,
    key: uuidv4(),
    order: getTimeStamp(),
  }

  dispatch(addIngredient2Constructor(preparedIngredient));
}