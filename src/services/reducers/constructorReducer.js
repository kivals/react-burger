import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT
} from "../actions/burgerConstructor";
import {BUN_INGREDIENT} from "../../utils/consts";
import {calcTotalPrice} from "../../utils/utils";
import {v4 as uuidv4} from "uuid";

const initialState = {
  bun: {},
  ingredients: [],
  totalPrice: 0,
}

export const constructorReducer = (state = initialState, action) => {
  if (action.type === ADD_CONSTRUCTOR_INGREDIENT) {
    const ingredient = action.value;
    if (ingredient.type === BUN_INGREDIENT) {
      return {
        ...state,
        bun: ingredient,
        totalPrice: calcTotalPrice(ingredient, state.ingredients)
      }
    }

    const preparedIngredient = {
      ...ingredient,
      key: uuidv4(),
      order: state.ingredients.length + 1,
    }

    const updatedList = [...state.ingredients, preparedIngredient];

    return {
      ...state,
      ingredients: updatedList,
      totalPrice: calcTotalPrice(state.bun, updatedList)
    }
  }

  if (action.type === DELETE_CONSTRUCTOR_INGREDIENT) {
    const deletedKey = action.value;
    const update = state.ingredients.filter(ing => ing.key !== deletedKey);
    return {
      ...state,
      ingredients: update,
      totalPrice: calcTotalPrice(state.bun, update)}
  }

  if (action.type === SORT_CONSTRUCTOR_INGREDIENT) {
    const [sourceIngredient, targetIngredient] = action.value;
    const sourceOrder = sourceIngredient.order;
    sourceIngredient.order = targetIngredient.order;
    targetIngredient.order = sourceOrder;

    return {
      ...state,
      ingredients: state.ingredients.sort((a, b) => a.order - b.order),
    }
  }

  return state;
}