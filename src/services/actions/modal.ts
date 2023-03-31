import {TOGGLE_MODAL} from "../constants/modal";

export interface IModalAction {
  readonly type: typeof TOGGLE_MODAL;
}

export type TModalActions = IModalAction;