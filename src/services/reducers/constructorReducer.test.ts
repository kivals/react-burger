import {constructorReducer as reducer, initialState as state} from './constructorReducer';
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  CLEAR_CONSTRUCTOR,
  DELETE_CONSTRUCTOR_INGREDIENT, SORT_CONSTRUCTOR_INGREDIENT
} from "../constants/burgerConstructor";
import {anotherIngredientTest, bunTest, ingredientTest} from "../../utils/const-test";

describe('constructorReducer test', () => {
  it('should return the initial state', function () {
    expect(reducer(state, { type: CLEAR_CONSTRUCTOR})).toEqual(state);
  });
  it('should handle CLEAR_CONSTRUCTOR', () => {
    expect(reducer(state, { type: CLEAR_CONSTRUCTOR })).toEqual(state)
  });
  it('should handle GET_CONSTRUCTOR_ITEM. Add NotBun ingredient.', () => {
    expect(reducer({ bun: null, ingredients: [] }, { type: ADD_CONSTRUCTOR_INGREDIENT, value: ingredientTest }))
      .toEqual({bun: null, ingredients: [ingredientTest]
    })
  })
  it('should handle GET_CONSTRUCTOR_ITEM. Add Bun ingredient.', () => {
    expect(reducer({ bun: null, ingredients: [] }, { type: ADD_CONSTRUCTOR_INGREDIENT, value: bunTest }))
      .toEqual({bun: bunTest, ingredients: []});
  });
  it('should handle DELETE_CONSTRUCTOR_INGREDIENT', () => {
    expect(reducer({ bun: null, ingredients: [ingredientTest] }, { type: DELETE_CONSTRUCTOR_INGREDIENT, value: ingredientTest.key }))
      .toEqual({bun: null, ingredients: []});
  });
  it('should handle SORT_CONSTRUCTOR_INGREDIENT', () => {
    expect(reducer({ bun: null, ingredients: [anotherIngredientTest ,ingredientTest] }, { type: SORT_CONSTRUCTOR_INGREDIENT, value: [ingredientTest, anotherIngredientTest] }))
      .toEqual({bun: null, ingredients: [anotherIngredientTest, ingredientTest]});
  });
})