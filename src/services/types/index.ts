import { ThunkAction } from 'redux-thunk';
import {TAuthActions} from "../actions/auth";
import {TBurgerConstructorActions} from "../actions/burgerConstructor";
import {TIngredientsActions} from "../actions/ingredients";
import {TOrderActions} from "../actions/order";

import {Action, ActionCreator} from "redux";
import store from "../store";
import {TModalActions} from "../actions/modal";
import {TWsActions, TWSUserActions} from "../actions/websockets";

export type TApplicationActions =
  | TAuthActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderActions
  | TModalActions
  | TWsActions
  | TWSUserActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;