import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer.js";
import {constructorReducer} from "./constructorReducer.js";
import {orderReducer} from "./orderReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";

export const rootReducer = (combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authReducer,
  modal: modalReducer,
}));