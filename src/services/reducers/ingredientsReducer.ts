import {TIngredient} from "../../utils/types";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants/ingredients";
import {TIngredientsActions} from "../actions/ingredients";

export interface IIngredientsState {
  ingredients: TIngredient[],
  isLoading: boolean,
  hasError: boolean
}

export const initialState: IIngredientsState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
}

export const ingredientsReducer = (
  state = initialState,
  action: TIngredientsActions): IIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: [...action.value],
        isLoading: false,
        hasError: false,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }
    default: {
      return state;
    }
  }
}