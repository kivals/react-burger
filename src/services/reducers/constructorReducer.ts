import {TBunIngredient, TIngredient} from "../../utils/types";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT
} from "../constants/burgerConstructor";
import {BUN_INGREDIENT} from "../../utils/consts";
import {TBurgerConstructorActions} from "../actions/burgerConstructor";

export interface IBurgerConstructorState {
    bun: TBunIngredient | TIngredient | null,
    ingredients: TIngredient[],
}

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: [],
}

export const constructorReducer = (
  state = initialState,
  action: TBurgerConstructorActions): IBurgerConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENT: {
      const ingredient = action.value;
      if (ingredient.type === BUN_INGREDIENT) {
        return {
          ...state,
          bun: ingredient,
        }
      }
      return {
        ...state,
        ingredients: [...state.ingredients, ingredient],
      }
    }

    case DELETE_CONSTRUCTOR_INGREDIENT: {
      const deletedKey = action.value;
      const update = state.ingredients.filter(ing => ing.key !== deletedKey);
      return {
        ...state,
        ingredients: update,
      }
    }

    case SORT_CONSTRUCTOR_INGREDIENT: {
      const [sourceIngredient, targetIngredient] = action.value;
      const sourceOrder = sourceIngredient.order;
      sourceIngredient.order = targetIngredient.order;
      targetIngredient.order = sourceOrder;

      return {
        ...state,
        ingredients: state.ingredients.sort((a, b) => a.order - b.order),
      }
    }
    default:
      return state;
  }
}