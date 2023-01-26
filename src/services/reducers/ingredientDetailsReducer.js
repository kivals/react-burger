import {SET_INGREDIENT_DETAILS} from "../actions/ingredients";

export const ingredientDetailsReducer = (state = {}, action) => {
  if (action.type === SET_INGREDIENT_DETAILS) {
    return {...action.value}
  }

  return state;
}