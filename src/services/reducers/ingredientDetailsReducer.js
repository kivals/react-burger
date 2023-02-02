import {CLEAR_INGREDIENT_DETAILS, SET_INGREDIENT_DETAILS} from "../actions/ingredients";

const initialState = {
  details: null,
}

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        details: action.value,
      };
    }

    case CLEAR_INGREDIENT_DETAILS: {
      return initialState;
    }

    default:
      return state;
  }
}