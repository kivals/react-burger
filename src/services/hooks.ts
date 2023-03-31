import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { RootState, TApplicationActions} from "./types";
import {ThunkDispatch} from "redux-thunk";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TApplicationActions>>;
