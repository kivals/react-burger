import {ingredientsReducer as reducer, initialState as state} from "./ingredientsReducer";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants/ingredients";
import {
  anotherIngredientTest,
  ingredientTest,
} from "../../utils/const-test";

describe('ingredientReducer test', () => {
  it('should handle GET_INGREDIENTS_REQUEST', function () {
    expect(reducer(state, { type: GET_INGREDIENTS_REQUEST}))
      .toEqual({...state, isLoading: true});
  });
  it('should handle GET_INGREDIENTS_FAILED', function () {
    expect(reducer(state, { type: GET_INGREDIENTS_FAILED}))
      .toEqual({...state, hasError: true});
  });
  it('should handle GET_INGREDIENTS_SUCCESS', function () {
    expect(reducer(state, { type: GET_INGREDIENTS_SUCCESS, value: [ingredientTest, anotherIngredientTest]}))
      .toEqual({
        ...state,
        ingredients: [ingredientTest, anotherIngredientTest],
        isLoading: false,
        hasError: false,
      });
  });
});