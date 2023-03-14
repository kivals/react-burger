import {TOGGLE_MODAL} from "../constants/modal";
import {TModalActions} from "../actions/modal";

export interface IModalState {
    isModal: boolean
}

const initialState: IModalState = {
  isModal: false,
}

export const modalReducer = (state = initialState, action: TModalActions) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        isModal: !state.isModal
      }
    }
    default: {
      return state;
    }
  }
}