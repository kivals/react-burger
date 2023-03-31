import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import {modalReducer} from "./modalReducer";
import {authReducer} from "./authReducer";
import {constructorReducer} from "./constructorReducer";
import {wsReducer} from "./wsReducer";
import {wsUserReducer} from "./wsUserReducer";

export const rootReducer = (combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  auth: authReducer,
  modal: modalReducer,
  webSocket: wsReducer,
  webSocketUser: wsUserReducer
}));