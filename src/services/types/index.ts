import { ThunkAction } from 'redux-thunk';
import {TAuthActions} from "../actions/auth";
import {TBurgerConstructorActions} from "../actions/burgerConstructor";
import {TIngredientsActions} from "../actions/ingredients";
import {TOrderActions} from "../actions/order";
import {store} from "../../index";
import {Action, Dispatch, ActionCreator} from "redux";

type TApplicationActions =
  | TAuthActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;