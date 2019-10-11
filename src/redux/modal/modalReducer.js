import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

const initialState = {
  isVisible: false,
  type: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        type: payload
      };
    case HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
        type: null
      };
    default:
      return state;
  }
};
