import {TOGGLE_MODAL} from "../actions/modal";

const initialState = {
  isModal: false,
}

export const modalReducer = (state = initialState, action) => {
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