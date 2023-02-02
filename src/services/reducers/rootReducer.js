import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer.js";
import {constructorReducer} from "./constructorReducer.js";
import {orderReducer} from "./orderReducer";
import {ingredientDetailsReducer} from "./ingredientDetailsReducer";

export const rootReducer = (combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
}));