import {modalReducer as reducer, initialState as state} from "./modalReducer";
import {TOGGLE_MODAL} from "../constants/modal";

describe('modalReducer test', () => {
  it('should handle TOGGLE_MODAL', function () {
    expect(reducer(state, { type: TOGGLE_MODAL}))
      .toEqual({isModal: !state.isModal});
  });
});