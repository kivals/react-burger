import {v4 as uuidv4} from "uuid";
import {getTimeStamp} from "../../utils/utils";

export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_CONSTRUCTOR_INGREDIENT = 'DELETE_CONSTRUCTOR_INGREDIENT';
export const SORT_CONSTRUCTOR_INGREDIENT = 'SORT_CONSTRUCTOR_INGREDIENT';

export const addIngredientToConstructor = (ingredient) => (dispatch) => {
  const preparedIngredient = {
    ...ingredient,
    key: uuidv4(),
    order: getTimeStamp(),
  }

  dispatch({
    type: ADD_CONSTRUCTOR_INGREDIENT,
    value: preparedIngredient,
  })
}